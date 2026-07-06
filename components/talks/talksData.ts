// Static, swappable data for the Talks sub-page.
// Mirrors the design handoff's `talks.html`.

export interface Talk {
  /** Outbound URL the card opens. */
  href: string;
  /** YouTube video id — thumbnail is pulled from i.ytimg.com. */
  videoId: string;
  /** Media corner badge, e.g. "YouTube". */
  corner: string;
  /** Small uppercase pill in the meta row, e.g. "VIDEO". */
  tag: string;
  /** Free-text meta after the tag, e.g. "Ocrolus · Product Pulse". */
  meta: string;
  /** Trailing meta cell, e.g. "~14 min". */
  duration: string;
  /** Card title. */
  title: string;
  /** Mono host line, e.g. "youtu.be/45c-4PkRABI?t=887". */
  host: string;
  /** One-paragraph description. */
  description: string;
  /** Call-to-action label (rendered with a leading ▸). */
  cta: string;
}

export const TALKS: Talk[] = [
  {
    href: "https://www.youtube.com/watch?v=eHXaMqrk9HY",
    videoId: "eHXaMqrk9HY",
    corner: "YouTube",
    tag: "VIDEO",
    meta: "Ocrolus · Live Session",
    duration: "~35 min",
    title: "State of SMB Lending: Reading the Signals in Q1 2026",
    host: "youtu.be/eHXaMqrk9HY",
    description:
      "A quarterly read on small-business borrower health, built from transaction-level data across 254,812 SMB loan applicants. The panel unpacks a Q1 2026 paradox — surface metrics like overdraft and NSF rates improved even as operating margins turned negative for the first time in nine quarters and debt-service coverage fell from 0.62x to 0.34x — and drills into the industry segments, from full-service restaurants to roofing and auto repair, feeling the sharpest cost and coverage pressure.",
    cta: "watch on youtube",
  },
  {
    href: "https://www.youtube.com/watch?v=kQiF4ny70Ng",
    videoId: "kQiF4ny70Ng",
    corner: "YouTube",
    tag: "VIDEO",
    meta: "Ocrolus · Product Pulse",
    duration: "~20 min",
    title: "Product Pulse: Portfolio Management",
    host: "youtu.be/kQiF4ny70Ng",
    description:
      "A walk through the full loan lifecycle with the Ocrolus product team — how Docs-to-Digital reconciles PDF bank statements against digital transaction data to catch tampering and undisclosed activity before funding, and how Post-Funding Analytics surfaces early cash-flow warning signals on a portfolio long before a borrower misses a payment.",
    cta: "watch on youtube",
  },
  {
    href: "https://www.youtube.com/watch?v=45c-4PkRABI&t=887s",
    videoId: "45c-4PkRABI",
    corner: "YouTube",
    tag: "VIDEO",
    meta: "Ocrolus · Product Pulse",
    duration: "~14 min",
    title: "Product Pulse: SMB Underwriting",
    host: "youtu.be/45c-4PkRABI?t=887",
    description:
      "A conversation with the Ocrolus product team on small-business underwriting — what the signal looks like in real loan files, the failure modes in cash-flow analysis, and how decisioning models actually land inside a lending workflow.",
    cta: "watch on youtube",
  },
];

export const thumbUrl = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
export const thumbFallbackUrl = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
