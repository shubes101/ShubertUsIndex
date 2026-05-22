import type { Metadata } from "next";
import Contact from "@/components/contact/contact";

export const metadata: Metadata = {
  title: "Contact · Patrick Shubert",
  description: "Download Patrick Shubert's contact card (vCard).",
};

export default function ContactPage() {
  return <Contact />;
}
