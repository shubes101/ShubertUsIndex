"use client";

import Image from "next/image";
import { WRITINGS } from "@/components/writing/writingData";
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
import {
  ReportMedia,
  ReportTile,
  TileLabel,
  TileWordmark,
  ReportCorner,
} from "@/components/writing/writingStyles";

export default function Writing() {
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
        <CrumbHere>Writing</CrumbHere>
      </Topbar>

      <PageHead>
        <Who>
          <Eyebrow>
            <Dot /> SHUBERT.US · WRITING
          </Eyebrow>
          <Title>Writing.</Title>
          <Sub>
            Published research and reports — mostly data-driven reads on
            small-business credit, drawn from real loan-application signal.
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
        <SectionTitle>State of SMB Lending · Q1 2026</SectionTitle>
        <SectionLine />
        <SectionCount>n = {WRITINGS.length}</SectionCount>
      </SectionHead>

      <Entries>
        {WRITINGS.map((writing) => (
          <Entry
            key={writing.href}
            href={writing.href}
            target="_blank"
            rel="noopener"
          >
            <ReportMedia>
              <ReportTile>
                <TileLabel>{writing.tileLabel}</TileLabel>
                <TileWordmark>{writing.tileWordmark}</TileWordmark>
              </ReportTile>
              <ReportCorner>REPORT</ReportCorner>
            </ReportMedia>
            <EntryBody>
              <EntryMeta>
                <Tag>{writing.tag}</Tag>
                <span>{writing.meta}</span>
                <span>·</span>
                <span>{writing.format}</span>
              </EntryMeta>
              <EntryTitle>{writing.title}</EntryTitle>
              <EntryHost>{writing.host}</EntryHost>
              <EntryDesc>{writing.description}</EntryDesc>
              <EntryFoot>
                <EntryCta>▸ {writing.cta}</EntryCta>
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
        <div>shubert.us / writing</div>
      </PageFoot>
    </Page>
  );
}
