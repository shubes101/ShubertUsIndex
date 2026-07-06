// Static, swappable data for the Writing sub-page.
// Mirrors the Projects/Talks handoff pattern. Add entries here as they publish.

export interface Writing {
  /** Outbound URL the card opens (direct PDF or article). */
  href: string;
  /** Small uppercase pill in the meta row, e.g. "REPORT". */
  tag: string;
  /** Free-text meta after the tag, e.g. "Ocrolus · SMB Lending". */
  meta: string;
  /** Trailing meta cell, e.g. "PDF · Q1 2026". */
  format: string;
  /** Card title. */
  title: string;
  /** Mono host line under the title. */
  host: string;
  /** One-paragraph description. */
  description: string;
  /** Call-to-action label (rendered with a leading ▸). */
  cta: string;
  /** Report tile: small caps label, e.g. "PART ONE". */
  tileLabel: string;
  /** Report tile: wordmark, e.g. "operational report". */
  tileWordmark: string;
}

export const WRITINGS: Writing[] = [
  {
    href:
      "https://resources.ocrolus.com/hubfs/2026/SMB/reports/state-of-smb-lending-operational-report.pdf",
    tag: "REPORT",
    meta: "Ocrolus · SMB Lending",
    format: "PDF · Q1 2026",
    title: "State of SMB Lending: Operational Report",
    host: "ocrolus.com/report/state-of-smb-lending",
    description:
      "Part one of the Q1 2026 State of SMB Lending series. A transaction-level read on how small businesses are actually operating — payroll activity, overdraft patterns, insurance coverage, payment-rail usage, and fixed obligations — drawn from SMB loan applications filed January through March 2026.",
    cta: "download pdf",
    tileLabel: "PART ONE",
    tileWordmark: "operational report",
  },
  {
    href:
      "https://resources.ocrolus.com/hubfs/2026/SMB/reports/state-of-smb-lending-financial-lookback.pdf",
    tag: "REPORT",
    meta: "Ocrolus · SMB Lending",
    format: "PDF · Q1 2026",
    title: "State of SMB Lending: Financial Report",
    host: "ocrolus.com/report/state-of-smb-lending",
    description:
      "Part two of the Q1 2026 State of SMB Lending series. A financial lookback across the same applicant pool — revenue trends, cash-flow patterns, and obligation coverage — tracing how borrower economics shifted quarter over quarter beneath the surface metrics.",
    cta: "download pdf",
    tileLabel: "PART TWO",
    tileWordmark: "financial report",
  },
];
