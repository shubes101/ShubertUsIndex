"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Page,
  Topbar,
  Back,
  CrumbSep,
  CrumbHere,
  PageHead,
  Who,
  Eyebrow,
  Dot,
  Title,
  Sub,
  Avatar,
  SectionHead,
  SectionNum,
  SectionTitle,
  SectionLine,
  SectionCount,
  PageFoot,
  FootLeft,
  Pill,
} from "@/components/subpages/chromeStyles";
import {
  VerifyCard,
  ContactName,
  ContactRole,
  VerifyHint,
  WidgetSlot,
  DownloadBtn,
  Status,
} from "@/components/contact/contactStyles";

// Public site key. Falls back to Cloudflare's "always passes" test key so the
// widget renders before real keys are provisioned; the server still fails
// closed without the matching secret.
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

type Phase = "idle" | "downloading" | "done" | "error" | "unconfigured";

export default function Contact() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    let cancelled = false;

    const render = () => {
      const t = (window as any).turnstile;
      if (cancelled || !t || !widgetRef.current || widgetIdRef.current) return;
      widgetIdRef.current = t.render(widgetRef.current, {
        sitekey: SITE_KEY,
        callback: (tok: string) => setToken(tok),
        "error-callback": () => setToken(null),
        "expired-callback": () => setToken(null),
        "timeout-callback": () => setToken(null),
      });
    };

    if ((window as any).turnstile) {
      render();
    } else {
      let s = document.getElementById(
        "cf-turnstile-script"
      ) as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement("script");
        s.id = "cf-turnstile-script";
        s.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
      }
      s.addEventListener("load", render);
    }

    return () => {
      cancelled = true;
      const t = (window as any).turnstile;
      if (t && widgetIdRef.current) {
        try {
          t.remove(widgetIdRef.current);
        } catch {
          /* widget already gone */
        }
      }
      widgetIdRef.current = null;
    };
  }, []);

  const resetWidget = () => {
    setToken(null);
    const t = (window as any).turnstile;
    if (t && widgetIdRef.current) t.reset(widgetIdRef.current);
  };

  const handleDownload = async () => {
    if (!token) return;
    setPhase("downloading");
    try {
      const res = await fetch("/api/vcard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (res.status === 503) {
        setPhase("unconfigured");
        return;
      }
      if (!res.ok) {
        setPhase("error");
        resetWidget();
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Patrick Shubert.vcf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setPhase("done");
      resetWidget();
    } catch {
      setPhase("error");
      resetWidget();
    }
  };

  return (
    <Page>
      <Topbar>
        <Back href="/">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 4 L6 8 L10 12" />
          </svg>
          <span>Links</span>
        </Back>
        <CrumbSep>/</CrumbSep>
        <CrumbHere>Contact</CrumbHere>
      </Topbar>

      <PageHead>
        <Who>
          <Eyebrow>
            <Dot /> SHUBERT.US · CONTACT
          </Eyebrow>
          <Title>Contact.</Title>
          <Sub>
            Grab my contact card as a vCard. A quick human check keeps the
            details away from scrapers and bots.
          </Sub>
        </Who>
        <Avatar>
          <Image
            src="/profile.png"
            alt="Patrick Shubert"
            width={78}
            height={78}
          />
        </Avatar>
      </PageHead>

      <SectionHead>
        <SectionNum>01</SectionNum>
        <SectionTitle>Contact card</SectionTitle>
        <SectionLine />
        <SectionCount>vcard</SectionCount>
      </SectionHead>

      <VerifyCard>
        <ContactName>Patrick Shubert</ContactName>
        <ContactRole>Data Science Lead · Ocrolus</ContactRole>
        <VerifyHint>
          Confirm you&apos;re human, then download the card (name, title, email,
          and phone).
        </VerifyHint>

        <WidgetSlot ref={widgetRef} />

        <DownloadBtn
          type="button"
          onClick={handleDownload}
          disabled={!token || phase === "downloading"}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 2.5 V10 M5 7 L8 10 L11 7 M3 13 H13" />
          </svg>
          {phase === "downloading"
            ? "Verifying…"
            : "Download contact card (.vcf)"}
        </DownloadBtn>

        {phase === "done" && (
          <Status $kind="ok">✓ Contact card downloaded — check your downloads.</Status>
        )}
        {phase === "error" && (
          <Status $kind="err">Couldn&apos;t verify — please try again.</Status>
        )}
        {phase === "unconfigured" && (
          <Status $kind="info">
            Download isn&apos;t configured yet (missing Turnstile keys).
          </Status>
        )}

        <noscript>
          JavaScript is required to verify and download the contact card.
        </noscript>
      </VerifyCard>

      <PageFoot>
        <FootLeft>
          <Pill>v2026.5</Pill>
          <span>updated may 2026</span>
        </FootLeft>
        <div>shubert.us / contact</div>
      </PageFoot>
    </Page>
  );
}
