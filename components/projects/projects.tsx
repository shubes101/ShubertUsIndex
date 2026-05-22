"use client";

import Image from "next/image";
import { PROJECTS } from "@/components/projects/projectsData";
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
  ProjectMedia,
  ProjectTile,
  TileLabel,
  TileWordmark,
  ProjectCorner,
} from "@/components/projects/projectsStyles";

export default function Projects() {
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
        <CrumbHere>Projects</CrumbHere>
      </Topbar>

      <PageHead>
        <Who>
          <Eyebrow>
            <Dot /> SHUBERT.US · PROJECTS
          </Eyebrow>
          <Title>Projects.</Title>
          <Sub>
            Things I&apos;ve built or shipped — credit models, side projects, the
            occasional weekend tool. Case studies live here once they&apos;re
            ready to share.
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
        <SectionTitle>Selected work</SectionTitle>
        <SectionLine />
        <SectionCount>n = {PROJECTS.length}</SectionCount>
      </SectionHead>

      <Entries>
        {PROJECTS.map((project) => (
          <Entry
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener"
          >
            <ProjectMedia>
              <ProjectTile>
                <TileLabel>{project.tileLabel}</TileLabel>
                <TileWordmark>{project.tileWordmark}</TileWordmark>
              </ProjectTile>
              <ProjectCorner>PROJECT</ProjectCorner>
            </ProjectMedia>
            <EntryBody>
              <EntryMeta>
                <Tag>{project.tag}</Tag>
                <span>{project.meta}</span>
                <span>·</span>
                <span>{project.status}</span>
              </EntryMeta>
              <EntryTitle>{project.title}</EntryTitle>
              <EntryHost>{project.host}</EntryHost>
              <EntryDesc>{project.description}</EntryDesc>
              <EntryFoot>
                <EntryCta>▸ {project.cta}</EntryCta>
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
        <div>shubert.us / projects</div>
      </PageFoot>
    </Page>
  );
}
