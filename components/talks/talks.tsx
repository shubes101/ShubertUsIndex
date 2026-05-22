"use client";

import Image from "next/image";
import { useState } from "react";
import {
  TALKS,
  thumbUrl,
  thumbFallbackUrl,
  type Talk,
} from "@/components/talks/talksData";
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
  Entries,
  Entry,
  EntryMedia,
  Corner,
  Play,
  EntryBody,
  EntryMeta,
  Tag,
  EntryTitle,
  EntryHost,
  EntryDesc,
  EntryFoot,
  EntryCta,
  EntryArrow,
  StubEntry,
  StubMedia,
  PlaceholderTag,
  PlaceholderLine,
  PageFoot,
  FootLeft,
  Pill,
} from "@/components/subpages/chromeStyles";

// YouTube thumbnail with maxres → hqdefault fallback (maxres 404s for some videos).
function Thumb({ talk }: { talk: Talk }) {
  const [src, setSrc] = useState(thumbUrl(talk.videoId));
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${talk.title} thumbnail`}
      onError={() => setSrc(thumbFallbackUrl(talk.videoId))}
    />
  );
}

export default function Talks() {
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
        <CrumbHere>Talks</CrumbHere>
      </Topbar>

      <PageHead>
        <Who>
          <Eyebrow>
            <Dot /> SHUBERT.US · TALKS
          </Eyebrow>
          <Title>Talks.</Title>
          <Sub>
            Recorded conversations, podcasts, and panels — mostly about credit
            decisioning and how ML actually lands inside a lending product.
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
        <SectionTitle>Featured</SectionTitle>
        <SectionLine />
        <SectionCount>n = {TALKS.length}</SectionCount>
      </SectionHead>

      <Entries>
        {TALKS.map((talk) => (
          <Entry key={talk.href} href={talk.href} target="_blank" rel="noopener">
            <EntryMedia>
              <Thumb talk={talk} />
              <Corner>{talk.corner}</Corner>
              <Play>
                <svg viewBox="0 0 38 38" fill="currentColor">
                  <circle cx="19" cy="19" r="18" fill="rgba(0,0,0,0.55)" />
                  <path d="M15 12 L27 19 L15 26 Z" fill="#fff" />
                </svg>
              </Play>
            </EntryMedia>
            <EntryBody>
              <EntryMeta>
                <Tag>{talk.tag}</Tag>
                <span>{talk.meta}</span>
                <span>·</span>
                <span>{talk.duration}</span>
              </EntryMeta>
              <EntryTitle>{talk.title}</EntryTitle>
              <EntryHost>{talk.host}</EntryHost>
              <EntryDesc>{talk.description}</EntryDesc>
              <EntryFoot>
                <EntryCta>▸ {talk.cta}</EntryCta>
                <EntryArrow>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12 L12 4 M6 4 L12 4 L12 10" />
                  </svg>
                </EntryArrow>
              </EntryFoot>
            </EntryBody>
          </Entry>
        ))}
      </Entries>

      <SectionHead>
        <SectionNum>02</SectionNum>
        <SectionTitle>More</SectionTitle>
        <SectionLine />
        <SectionCount>soon</SectionCount>
      </SectionHead>

      <StubEntry aria-hidden="true">
        <StubMedia />
        <EntryBody>
          <PlaceholderTag />
          <PlaceholderLine $w={70} />
          <PlaceholderLine $w={50} />
          <PlaceholderLine $w={90} />
          <PlaceholderLine $w={70} />
        </EntryBody>
      </StubEntry>

      <PageFoot>
        <FootLeft>
          <Pill>v2026.5</Pill>
          <span>updated may 2026</span>
        </FootLeft>
        <div>shubert.us / talks</div>
      </PageFoot>
    </Page>
  );
}
