"use client";

import { useEffect, useState, ReactNode } from "react";
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
  Grid,
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
} from "@/components/linkBoard/linkBoardStyles";

// Interpolates an integer 0 → target after `delay`ms over `duration`ms,
// cubic ease-out. Drives the "n =" count in the section head.
function useCountTicker(
  target: number,
  { delay = 700, duration = 800 }: { delay?: number; duration?: number } = {}
) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const startAt = performance.now() + delay;
    const tick = (t: number) => {
      if (t < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, (t - startAt) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay, duration]);
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

const cardBaseDelay = 0.8;
const cardStagger = 0.07;
const kindExtra = 0.2;

export default function LinkBoard() {
  const links = config.links;
  const countN = useCountTicker(links.length, { delay: 780, duration: 850 });

  return (
    <Root>
      <Scan />

      <Eyebrow>
        <Dot /> SHUBERT.US · MYLINKS
      </Eyebrow>

      <HeadRow>
        <HeadCol>
          <H1>{config.name}.</H1>
          <Sub>
            {config.role}. {config.tagline}
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
          <MetaValue>{config.location}</MetaValue>
        </MetaCell>
        <MetaCell>
          <MetaKey>Updated</MetaKey>
          <MetaValue>{config.updated}</MetaValue>
        </MetaCell>
        <MetaCell>
          <MetaKey>Pages</MetaKey>
          <MetaValue $mono>{config.pagesGlob}</MetaValue>
        </MetaCell>
      </Meta>

      <SectionHead>
        <SectionNum>01</SectionNum>
        <SectionTitle>Links</SectionTitle>
        <SectionLine />
        <SectionCount>n = {countN}</SectionCount>
      </SectionHead>

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
