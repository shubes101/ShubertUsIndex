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
  {
    href: "https://roto.shubert.us",
    tag: "WEB APP",
    meta: "rotisserie · draft",
    status: "seasonal",
    title: "Roto Baseball Drafting Application",
    host: "roto.shubert.us",
    description:
      "Runs my fantasy league's hybrid rotisserie draft from start to finish — configure teams and draft parameters, then track real-time analytics on your roster's relative standing as picks land. It drives interactive draft boards and pick logs for players in the room and those dialing in remotely. Built for a league that's run since 1980 — now multi-generational (my dad joined in the '80s).",
    cta: "open app",
    tileLabel: "SEASONAL",
    tileWordmark: "roto.shubert.us",
  },
  {
    href: "https://beerhawl.shubert.us",
    tag: "WEB APP",
    meta: "agent · SMB",
    status: "live",
    title: "Beer Hawl: Agent-Embedded Storefront",
    host: "beerhawl.shubert.us",
    description:
      "An experiment in embedding an AI agent directly into a small-business website. The owner runs the site by text: the agent OCRs photos of printed menus, takes plain-language requests to add or pull items (temporarily or for good), and keeps the events calendar current — no dashboard required.",
    cta: "open site",
    tileLabel: "LIVE",
    tileWordmark: "beerhawl.shubert.us",
  },
];
