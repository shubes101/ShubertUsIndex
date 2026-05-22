import styled, { keyframes, css } from "styled-components";

/* Design tokens — Dashboard B (D_COLORS from dashboard.jsx). */
const bg = "#f6f4ef";
const ink = "#1c1f24";
const dim = "#6b6f76";
const dim2 = "#9aa0a6";
const rule = "rgba(28,31,36,0.10)";
const card = "#ffffff";
const cardBorder = "rgba(28,31,36,0.08)";
const accent = "#1f4fd6"; // signal blue
const green = "#1f8a5b";

const sans =
  "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
const mono = "var(--font-mono), ui-monospace, monospace";

/* ---------- keyframes ---------- */
const dvFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const dvFadeUp = keyframes`
  from { opacity: 0; translate: 0 10px; }
  to   { opacity: 1; translate: 0 0; }
`;
const dvCardIn = keyframes`
  from { opacity: 0; translate: 0 12px; }
  to   { opacity: 1; translate: 0 0; }
`;
const dvAvatarIn = keyframes`
  from { opacity: 0; scale: 0.86; }
  to   { opacity: 1; scale: 1; }
`;
const dvDrawLine = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;
const dvScan = keyframes`
  0%   { transform: translateX(-110%); opacity: 0; }
  12%  { opacity: 1; }
  88%  { opacity: 1; }
  100% { transform: translateX(110%);  opacity: 0; }
`;
const dvDotPulse = keyframes`
  0%   { box-shadow: 0 0 0 0    rgba(31,138,91,0.55), 0 0 0 4px rgba(31,138,91,0.15); }
  70%  { box-shadow: 0 0 0 18px rgba(31,138,91,0),    0 0 0 4px rgba(31,138,91,0.15); }
  100% { box-shadow: 0 0 0 0    rgba(31,138,91,0),    0 0 0 4px rgba(31,138,91,0.15); }
`;
const dvDotBreathe = keyframes`
  0%, 100% { opacity: 1;   }
  50%      { opacity: 0.32; }
`;

const noMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
`;

/* ---------- base ---------- */
export const Root = styled.div`
  font-family: ${sans};
  color: ${ink};
  background: ${bg};
  max-width: 720px;
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 44px 44px 36px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(28, 31, 36, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(28, 31, 36, 0.06) 1px, transparent 1px),
      linear-gradient(rgba(28, 31, 36, 0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(28, 31, 36, 0.022) 1px, transparent 1px);
    background-size: 88px 88px, 88px 88px, 22px 22px, 22px 22px;
    background-position: -1px -1px;
    -webkit-mask-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.55) 28%,
      rgba(0, 0, 0, 0.15) 55%,
      transparent 80%
    );
    mask-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.55) 28%,
      rgba(0, 0, 0, 0.15) 55%,
      transparent 80%
    );
    opacity: 0;
    animation: ${dvFadeIn} 0.6s 0.05s both ease-out;
    ${noMotion}
  }

  & > * {
    position: relative;
  }

  @media (max-width: 560px) {
    padding: 32px 22px 28px;
  }
`;

/* scan bar that sweeps across the top on load */
export const Scan = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${accent} 50%,
    transparent 100%
  );
  animation: ${dvScan} 1s 0s cubic-bezier(0.4, 0, 0.2, 1) both;
  z-index: 5;
  pointer-events: none;
  ${noMotion}
`;

/* ---------- header ---------- */
export const Eyebrow = styled.div`
  font-family: ${mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${dim};
  display: flex;
  align-items: center;
  gap: 10px;
  animation: ${dvFadeIn} 0.5s 0.1s both ease-out;
  ${noMotion}
`;

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${green};
  box-shadow: 0 0 0 4px rgba(31, 138, 91, 0.15);
  animation: ${dvDotPulse} 1.6s 0.2s ease-out both,
    ${dvDotBreathe} 2.6s 1.8s ease-in-out infinite;
  ${noMotion}
`;

export const HeadRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const HeadCol = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Avatar = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  background: ${card};
  box-shadow: 0 0 0 1px ${cardBorder}, 0 12px 28px -16px rgba(28, 31, 36, 0.35);
  animation: ${dvAvatarIn} 0.55s 0.18s both cubic-bezier(0.2, 0.7, 0.3, 1);
  ${noMotion}

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 560px) {
    width: 84px;
    height: 84px;
  }
`;

export const AvatarRing = styled.span`
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px dashed ${cardBorder};
  opacity: 0;
  animation: ${dvFadeIn} 0.5s 0.5s both ease-out;
  ${noMotion}
`;

export const H1 = styled.h1`
  font-size: 56px;
  line-height: 1.02;
  letter-spacing: -0.025em;
  font-weight: 600;
  margin: 18px 0 6px;
  font-feature-settings: "ss01", "cv11";
  animation: ${dvFadeUp} 0.6s 0.22s both cubic-bezier(0.2, 0.7, 0.3, 1);
  ${noMotion}

  @media (max-width: 560px) {
    font-size: 42px;
  }
`;

export const Sub = styled.div`
  color: ${dim};
  font-size: 15px;
  max-width: 520px;
  line-height: 1.45;
  animation: ${dvFadeUp} 0.5s 0.34s both ease-out;
  ${noMotion}
`;

/* ---------- meta row ---------- */
export const Meta = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 18px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid ${rule};
  border-radius: 8px;
  position: relative;
  animation: ${dvFadeUp} 0.5s 0.45s both ease-out;
  ${noMotion}

  @media (max-width: 560px) {
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const MetaCell = styled.div`
  padding: 0;
  border: 0;
  margin: 0;
`;

export const MetaKey = styled.div`
  font-family: ${mono};
  font-size: 10.5px;
  color: ${dim2};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const MetaValue = styled.div<{ $mono?: boolean }>`
  font-size: ${({ $mono }) => ($mono ? "12px" : "13.5px")};
  color: ${ink};
  margin-top: 2px;
  ${({ $mono }) => $mono && `font-family: ${mono};`}
`;

/* ---------- section head ---------- */
export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin: 28px 0 14px;
`;

export const SectionNum = styled.span`
  font-family: ${mono};
  color: ${dim2};
  font-size: 12px;
  animation: ${dvFadeIn} 0.4s 0.62s both ease-out;
  ${noMotion}
`;

export const SectionTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  animation: ${dvFadeIn} 0.4s 0.66s both ease-out;
  ${noMotion}
`;

export const SectionLine = styled.span`
  flex: 1;
  border-top: 1px solid ${rule};
  transform: translateY(-3px);
  transform-origin: left center;
  animation: ${dvDrawLine} 0.7s 0.58s both cubic-bezier(0.4, 0, 0.2, 1);
  ${noMotion}
`;

export const SectionCount = styled.span`
  font-family: ${mono};
  color: ${dim};
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  animation: ${dvFadeIn} 0.4s 0.76s both ease-out;
  ${noMotion}
`;

/* ---------- cards ---------- */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Idx = styled.span`
  font-family: ${mono};
  font-size: 10.5px;
  color: ${dim2};
  letter-spacing: 0.1em;
  font-variant-numeric: tabular-nums;
`;

export const Arrow = styled.span`
  color: ${dim2};
  transition: transform 0.15s, color 0.15s;
`;

export const CardLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 14px 0 4px;
`;

export const CardHost = styled.div`
  font-family: ${mono};
  font-size: 11.5px;
  color: ${dim};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 14px;
`;

export const Note = styled.span`
  font-size: 11.5px;
  color: ${dim};
`;

export const Kind = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: ${mono};
  font-size: 10.5px;
  color: ${dim2};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  animation: ${dvFadeIn} 0.5s both ease-out;
  transition: color 0.15s;
  ${noMotion}

  svg {
    color: ${dim2};
    transition: color 0.15s, transform 0.15s;
    flex-shrink: 0;
  }
`;

export const Card = styled.a`
  background: ${card};
  border: 1px solid ${cardBorder};
  border-radius: 10px;
  padding: 18px 18px 16px;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: transform 0.15s cubic-bezier(0.2, 0.7, 0.3, 1), box-shadow 0.15s,
    border-color 0.15s;
  animation: ${dvCardIn} 0.55s both cubic-bezier(0.2, 0.7, 0.3, 1);
  ${noMotion}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -14px rgba(28, 31, 36, 0.3);
    border-color: rgba(31, 79, 214, 0.35);
  }

  &:hover ${Arrow} {
    color: ${accent};
    transform: translate(2px, -2px);
  }

  &:hover ${Kind}, &:hover ${Kind} svg {
    color: ${accent};
  }

  /* odd total → last card spans both columns */
  &:last-child:nth-child(odd) {
    grid-column: span 2;
  }
  &:last-child:nth-child(odd) ${CardBottom} {
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    &:last-child:nth-child(odd) {
      grid-column: span 1;
    }
  }
`;

/* ---------- footer ---------- */
export const Foot = styled.div`
  margin-top: auto;
  padding-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${mono};
  font-size: 11px;
  color: ${dim2};
  letter-spacing: 0.08em;
  animation: ${dvFadeIn} 0.6s 1.35s both ease-out;
  ${noMotion}
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
