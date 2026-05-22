import styled from "styled-components";
import Link from "next/link";

/* Shared chrome for the Dashboard sub-pages (Talks, Projects).
   Faithful port of pages.css from the Claude Design handoff. */

const bg = "#f6f4ef"; // warm paper
const ink = "#1c1f24";
const dim = "#6b6f76";
const dim2 = "#9aa0a6";
const rule = "rgba(28,31,36,0.10)";
const card = "#ffffff";
const cardb = "rgba(28,31,36,0.08)";
const accent = "#1f4fd6"; // signal blue
const green = "#1f8a5b";

const sans =
  "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
const mono = "var(--font-mono), ui-monospace, monospace";

/* Outer page frame — warm paper bg + radial dot grid, faded top-down. */
export const Page = styled.main`
  position: relative;
  max-width: 880px;
  margin: 0 auto;
  padding: 56px 44px 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: ${sans};
  color: ${ink};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: radial-gradient(rgba(28, 31, 36, 0.1) 1px, transparent 1px);
    background-size: 22px 22px;
    background-position: -1px -1px;
    -webkit-mask-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.15) 55%,
      transparent 90%
    );
    mask-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.15) 55%,
      transparent 90%
    );
  }

  & > * {
    position: relative;
  }

  @media (max-width: 640px) {
    padding: 32px 20px 40px;
  }
`;

/* Top bar — back link + breadcrumb */
export const Topbar = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: ${mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${dim};
`;

export const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px 6px 8px;
  border: 1px solid ${rule};
  border-radius: 99px;
  background: ${card};
  color: ${ink};
  text-decoration: none;
  transition: background 0.12s, border-color 0.12s;

  &:hover {
    background: ${ink};
    color: ${bg};
    border-color: ${ink};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const CrumbSep = styled.span`
  color: ${dim2};
`;

export const CrumbHere = styled.span`
  color: ${ink};
`;

/* Page header — name row */
export const PageHead = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 22px;
  margin-top: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${rule};
`;

export const Who = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Eyebrow = styled.div`
  font-family: ${mono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${dim};
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${green};
  box-shadow: 0 0 0 4px rgba(31, 138, 91, 0.15);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 44px;
  line-height: 1.02;
  letter-spacing: -0.025em;
  font-weight: 600;

  @media (max-width: 640px) {
    font-size: 34px;
  }
`;

export const Sub = styled.p`
  color: ${dim};
  font-size: 14.5px;
  margin-top: 6px;
  max-width: 540px;
  line-height: 1.5;
`;

export const Avatar = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${card};
  box-shadow: 0 0 0 1px ${cardb}, 0 10px 22px -14px rgba(28, 31, 36, 0.3);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
  }
`;

/* Section heading */
export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin: 32px 0 18px;
`;

export const SectionNum = styled.span`
  font-family: ${mono};
  color: ${dim2};
  font-size: 12px;
`;

export const SectionTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const SectionLine = styled.span`
  flex: 1;
  border-top: 1px solid ${rule};
  transform: translateY(-3px);
`;

export const SectionCount = styled.span`
  font-family: ${mono};
  color: ${dim};
  font-size: 12px;
`;

/* Entries — uniform card with media slot */
export const Entries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const EntryMedia = styled.div`
  aspect-ratio: 16 / 9;
  background: #ece9e1;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Play = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4));
  color: #fff;

  svg {
    width: 38px;
    height: 38px;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
  }
`;

export const Corner = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-family: ${mono};
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 7px;
  border-radius: 3px;
`;

export const EntryBody = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const EntryMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${mono};
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${dim2};
`;

export const Tag = styled.span`
  background: ${ink};
  color: ${bg};
  padding: 2px 7px;
  border-radius: 3px;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

export const EntryTitle = styled.div`
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: 600;
  margin: 8px 0 4px;
`;

export const EntryHost = styled.div`
  font-family: ${mono};
  font-size: 11.5px;
  color: ${dim};
`;

export const EntryDesc = styled.p`
  margin-top: 10px;
  color: ${ink};
  font-size: 14px;
  line-height: 1.55;
  max-width: 56ch;
`;

export const EntryArrow = styled.span`
  color: ${dim2};
  transition: transform 0.15s, color 0.15s;
`;

export const EntryFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;

export const EntryCta = styled.span`
  font-family: ${mono};
  font-size: 11.5px;
  color: ${accent};
  letter-spacing: 0.04em;
`;

export const Entry = styled.a`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 22px;
  background: ${card};
  border: 1px solid ${cardb};
  border-radius: 12px;
  padding: 18px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.15s cubic-bezier(0.2, 0.7, 0.3, 1), box-shadow 0.15s,
    border-color 0.15s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px -16px rgba(28, 31, 36, 0.3);
    border-color: rgba(31, 79, 214, 0.35);
  }

  &:hover ${EntryArrow} {
    color: ${accent};
    transform: translate(2px, -2px);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* Stub-entry — preview of a future entry */
export const StubEntry = styled.div`
  margin-top: 14px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 22px;
  background: transparent;
  border: 1px dashed ${rule};
  border-radius: 12px;
  padding: 18px;
  opacity: 0.6;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StubMedia = styled(EntryMedia)`
  background: repeating-linear-gradient(
    45deg,
    #ece9e1 0 8px,
    #f3efe6 8px 16px
  );
`;

export const PlaceholderTag = styled.span`
  display: inline-block;
  width: 60px;
  height: 12px;
  background: ${cardb};
  border-radius: 3px;
`;

export const PlaceholderLine = styled.div<{ $w: number }>`
  height: 12px;
  border-radius: 4px;
  background: ${cardb};
  margin: 8px 0;
  width: ${({ $w }) => $w}%;
`;

/* Footer */
export const PageFoot = styled.footer`
  margin-top: auto;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${mono};
  font-size: 11px;
  color: ${dim2};
  letter-spacing: 0.08em;
`;

export const FootLeft = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const Pill = styled.span`
  background: ${ink};
  color: ${bg};
  padding: 5px 9px;
  border-radius: 99px;
  font-weight: 600;
  letter-spacing: 0.1em;
`;
