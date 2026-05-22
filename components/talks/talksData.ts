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
