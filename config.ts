import { SiteConfig } from "@/types/data";

// Authoritative content for the link board. Edit links here.
// Writing is intentionally omitted for now — add a { key: "writing", ... }
// entry and create app/writing/ when it's ready.
const config: SiteConfig = {
  title: "Patrick Shubert",
  name: "Patrick Shubert",
  role: "Credit Decisioning / Data Science",
  tagline: "A few useful links, kept in one place.",
  location: "Philadelphia / NYC",
  updated: "May 2026",
  pagesGlob: "shubert.us/*",
  version: "v2026.5",
  links: [
    {
      key: "linkedin",
      label: "LinkedIn",
      host: "linkedin.com/in/patrickshubert",
      href: "https://www.linkedin.com/in/patrickshubert",
      note: "profile",
    },
    {
      key: "vcard",
      label: "Contact card",
      host: "shubert.us/contact",
      href: "/contact",
      note: "vCard",
    },
    {
      key: "ocrolus",
      label: "Ocrolus",
      host: "ocrolus.com",
      href: "https://www.ocrolus.com",
      note: "vertical AI @ scale",
    },
    {
      key: "talks",
      label: "Talks",
      host: "shubert.us/talks",
      href: "/talks",
      note: "videos & podcasts",
    },
    {
      key: "projects",
      label: "Projects",
      host: "shubert.us/projects",
      href: "/projects",
      note: "things i've built",
    },
    {
      key: "email_work",
      label: "Work email",
      host: "PShubert@Ocrolus.com",
      href: "mailto:PShubert@Ocrolus.com",
      note: "build with us",
    },
    {
      key: "email_personal",
      label: "Personal email",
      host: "Patrick.Shubert@gmail.com",
      href: "mailto:Patrick.Shubert@gmail.com",
      note: "say hi",
    },
  ],
};

export default config;
