import { SiteConfig } from "@/types/data";

// Authoritative content for the link board. Edit links here.
const config: SiteConfig = {
  title: "Patrick Shubert",
  name: "Patrick Shubert",
  role: "Credit Decisioning / Data Science",
  tagline: "A few useful links, kept in one place.",
  location: "Philadelphia / NYC",
  updated: "Oct 2026",
  pagesGlob: "shubert.us/*",
  version: "v2026.10",
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
      key: "oportun",
      label: "Oportun",
      host: "oportun.com",
      href: "https://oportun.com",
      note: "credit with purpose",
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
      key: "writing",
      label: "Writing",
      host: "shubert.us/writing",
      href: "/writing",
      note: "research & reports",
    },
    {
      key: "email_work",
      label: "Work email",
      host: "Patrick.Shubert@oportun.com",
      href: "mailto:Patrick.Shubert@oportun.com",
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
