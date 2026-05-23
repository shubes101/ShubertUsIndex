"use client";

import { useEffect, useLayoutEffect, useState, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import {
  Root,
  Scan,
  Eyebrow,
  Dot,
  HeadRow,
  HeadCol,
  Avatar,
  AvatarRing,
  H1,
  Sub,
  Meta,
  MetaCell,
  MetaKey,
  MetaValue,
  SectionHead,
  SectionNum,
  SectionTitle,
  SectionLine,
  SectionCount,
  GridWrap,
  Grid,
  GridScan,
  Card,
  CardTop,
  Idx,
  Arrow,
  CardLabel,
  CardHost,
  CardBottom,
  Note,
  Kind,
  Foot,
  FootLeft,
  Pill,
  TypedOverlay,
  Caret,
} from "@/components/linkBoard/linkBoardStyles";

// useLayoutEffect on the client (to reset text before paint), useEffect on the
// server (avoids the SSR warning).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Typed strings.
const NAME = `${config.name}.`;
const SUBTEXT = `${config.role}. ${config.tagline}`;
const LOC = config.location;
const UPDATED = config.updated;
const PAGES = config.pagesGlob;

// Typewriter timing (ms). Fields type one after another in reading order:
// headline -> subtitle -> Location -> Updated -> Pages. Each starts a short
// gap after the previous finishes.
const NAME_START = 300;
const NAME_SPEED = 60;
const SUB_GAP = 150;
const SUB_SPEED = 13;
const LOC_GAP = 200;
const LOC_SPEED = 32;
const UPD_GAP = 120;
const UPD_SPEED = 36;
const PAGES_GAP = 120;
const PAGES_SPEED = 36;

// Cards/footer/section delays live in linkBoardStyles.ts; these two drive the
// card cascade. Cards begin as the Location finishes typing (~3.2s), so they
// reveal while Updated/Pages are still typing in the meta box.
const cardBaseDelay = 3.2;
const cardStagger = 0.14;
const kindExtra = 0.2;

// Counts an integer up to `target` over `duration`ms (cubic ease-out) once
// `enabled` flips true. Drives the "n =" readout.
function useCountTicker(
  target: number,
  { enabled = true, duration = 800 }: { enabled?: boolean; duration?: number } = {}
) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let raf: number;
    const startAt = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - startAt) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, duration]);
  return n;
}

type LinkKind = "external" | "page" | "email";

const KIND_ICON: Record<LinkKind, ReactNode> = {
  external: (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 3 H4 a1 1 0 0 0 -1 1 v8 a1 1 0 0 0 1 1 h8 a1 1 0 0 0 1 -1 v-2.5" />
      <path d="M9.5 3 H13 V6.5" />
      <path d="M13 3 L7.5 8.5" />
    </svg>
  ),
  page: (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8 H12.5" />
      <path d="M9 4.5 L13 8 L9 11.5" />
    </svg>
  ),
  email: (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.25" y="4" width="11.5" height="8.5" rx="1.3" />
      <path d="M2.75 5 L8 9 L13.25 5" />
    </svg>
  ),
};

const kindOf = (href: string): LinkKind =>
  href.startsWith("mailto:")
    ? "email"
    : /^https?:\/\//.test(href)
    ? "external"
    : "page";

// Full-text placeholder (kept for layout + screen readers) with the typed
// slice drawn on top, plus a blinking caret while this field is typing.
function Typed({
  full,
  shown,
  on,
}: {
  full: string;
  shown: string;
  on: boolean;
}) {
  return (
    <>
      <span style={{ opacity: 0 }}>{full}</span>
      <TypedOverlay aria-hidden="true">
        {shown}
        {on && <Caret />}
      </TypedOverlay>
    </>
  );
}

type FieldKey = "name" | "sub" | "loc" | "upd" | "pages";

export default function LinkBoard() {
  const links = config.links;

  // Server/no-JS render the full text; on the client we reset and type it in.
  const [typed, setTyped] = useState({
    name: NAME,
    sub: SUBTEXT,
    loc: LOC,
    upd: UPDATED,
    pages: PAGES,
  });
  const [active, setActive] = useState<FieldKey | null>(null);
  const [reduce, setReduce] = useState(false);
  const [started, setStarted] = useState(false);
  // Links section (section head, count, cards) reveals once Location is typed,
  // overlapping the Updated/Pages typing.
  const [revealLinks, setRevealLinks] = useState(false);

  useIsoLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setReduce(true);
      setRevealLinks(true);
      return;
    }
    // Clear before paint so the typing starts from empty without a flash.
    setTyped({ name: "", sub: "", loc: "", upd: "", pages: "" });
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!started || reduce) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const type = (
      key: FieldKey,
      text: string,
      speed: number,
      startAt: number,
      onDone?: () => void
    ) => {
      let i = 0;
      const begin = setTimeout(function step() {
        i += 1;
        setTyped((prev) => ({ ...prev, [key]: text.slice(0, i) }));
        if (i < text.length) timers.push(setTimeout(step, speed));
        else onDone?.();
      }, startAt);
      timers.push(begin);
    };

    setActive("name");
    type("name", NAME, NAME_SPEED, NAME_START, () => {
      setActive("sub");
      type("sub", SUBTEXT, SUB_SPEED, SUB_GAP, () => {
        setActive("loc");
        type("loc", LOC, LOC_SPEED, LOC_GAP, () => {
          // Location done → start revealing the links section…
          setRevealLinks(true);
          setActive("upd");
          // …while Updated and Pages keep typing.
          type("upd", UPDATED, UPD_SPEED, UPD_GAP, () => {
            setActive("pages");
            type("pages", PAGES, PAGES_SPEED, PAGES_GAP, () => {
              setActive(null);
            });
          });
        });
      });
    });

    return () => timers.forEach(clearTimeout);
  }, [started, reduce]);

  const countN = useCountTicker(links.length, {
    enabled: revealLinks && !reduce,
    duration: 900,
  });
  const displayCount = reduce ? links.length : countN;

  return (
    <Root>
      <Scan />

      <Eyebrow>
        <Dot /> SHUBERT.US · MYLINKS
      </Eyebrow>

      <HeadRow>
        <HeadCol>
          <H1>
            <Typed full={NAME} shown={typed.name} on={active === "name"} />
          </H1>
          <Sub>
            <Typed full={SUBTEXT} shown={typed.sub} on={active === "sub"} />
          </Sub>
        </HeadCol>
        <Avatar>
          <AvatarRing />
          <Image
            src="/profile.png"
            alt="Patrick Shubert"
            width={108}
            height={108}
          />
        </Avatar>
      </HeadRow>

      <Meta>
        <MetaCell>
          <MetaKey>Location</MetaKey>
          <MetaValue>
            <Typed full={LOC} shown={typed.loc} on={active === "loc"} />
          </MetaValue>
        </MetaCell>
        <MetaCell>
          <MetaKey>Updated</MetaKey>
          <MetaValue>
            <Typed full={UPDATED} shown={typed.upd} on={active === "upd"} />
          </MetaValue>
        </MetaCell>
        <MetaCell>
          <MetaKey>Pages</MetaKey>
          <MetaValue $mono>
            <Typed full={PAGES} shown={typed.pages} on={active === "pages"} />
          </MetaValue>
        </MetaCell>
      </Meta>

      <SectionHead>
        <SectionNum>01</SectionNum>
        <SectionTitle>Links</SectionTitle>
        <SectionLine />
        <SectionCount>n = {displayCount}</SectionCount>
      </SectionHead>

      <GridWrap>
        <GridScan />
        <Grid>
          {links.map((L, i) => {
          const delay = cardBaseDelay + i * cardStagger;
          const kind = kindOf(L.href);
          const isPage = kind === "page";
          const linkProps = isPage
            ? { as: Link, href: L.href }
            : kind === "external"
            ? { href: L.href, target: "_blank", rel: "noopener" }
            : { href: L.href };
          return (
            <Card
              key={L.key}
              {...(linkProps as any)}
              style={{ animationDelay: delay.toFixed(2) + "s" }}
            >
              <CardTop>
                <Idx>
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(links.length).padStart(2, "0")}
                </Idx>
                <Arrow>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path
                      d="M4 12 L12 4 M6 4 L12 4 L12 10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Arrow>
              </CardTop>
              <CardLabel>{L.label}</CardLabel>
              <CardHost>{L.host}</CardHost>
              <CardBottom>
                <Note>{L.note}</Note>
                <Kind
                  style={{ animationDelay: (delay + kindExtra).toFixed(2) + "s" }}
                >
                  {KIND_ICON[kind]}
                  <span>{kind}</span>
                </Kind>
              </CardBottom>
            </Card>
          );
        })}
        </Grid>
      </GridWrap>

      <Foot>
        <FootLeft>
          <Pill>{config.version}</Pill>
          <span>last updated · today</span>
        </FootLeft>
        <div>shubert.us</div>
      </Foot>
    </Root>
  );
}
