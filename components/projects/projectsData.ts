// Static, swappable data for the Projects sub-page.
// Mirrors the design handoff's `projects.html`. Add entries here as they ship.

export interface Project {
  /** Outbound URL the card opens. */
  href: string;
  /** Small uppercase pill in the meta row, e.g. "WEB APP". */
  tag: string;
  /** Free-text meta after the tag, e.g. "credit · portfolio". */
  meta: string;
  /** Trailing meta cell, e.g. "live". */
  status: string;
  /** Card title (use   for non-breaking spaces). */
  title: string;
  /** Mono host line under the title. */
  host: string;
  /** One-paragraph description. */
  description: string;
  /** Call-to-action label (rendered with a leading ▸). */
  cta: string;
  /** Gradient media tile: small caps label, e.g. "LIVE". */
  tileLabel: string;
  /** Gradient media tile: wordmark, e.g. "credit.shubert.us". */
  tileWordmark: string;
}

export const PROJECTS: Project[] = [
  {
    href: "https://credit.shubert.us",
    tag: "WEB APP",
    meta: "credit · portfolio",
    status: "live",
    title: "Portfolio Analysis: AI Assisted",
    host: "credit.shubert.us",
    description:
      "A working tool that pairs AI assistance with credit-portfolio analysis — quick triage, anomaly surfacing, and a hands-on sandbox for poking at the underlying signals.",
    cta: "open tool",
    tileLabel: "LIVE",
    tileWordmark: "credit.shubert.us",
  },
];
