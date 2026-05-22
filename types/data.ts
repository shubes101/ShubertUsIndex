export interface LinkItem {
  /** Stable React key. */
  key: string;
  /** Card label, e.g. "LinkedIn". */
  label: string;
  /** Mono host line, e.g. "linkedin.com/in/patrickshubert". */
  host: string;
  /** Destination. Absolute URL → external, relative → internal page, mailto: → email. */
  href: string;
  /** Short descriptor under the card, e.g. "profile". */
  note: string;
}

export interface SiteConfig {
  /** Document <title>. */
  title: string;
  /** Display name (a trailing period is added in the UI). */
  name: string;
  /** Role line, shown in the subtitle. */
  role: string;
  /** One-line tagline, shown after the role. */
  tagline: string;
  /** Meta panel — Location cell. */
  location: string;
  /** Meta panel — Updated cell, e.g. "May 2026". */
  updated: string;
  /** Meta panel — Pages cell, e.g. "shubert.us/*". */
  pagesGlob: string;
  /** Footer version pill, e.g. "v2026.5". */
  version: string;
  /** Link cards. */
  links: LinkItem[];
}
