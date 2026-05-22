import type { Metadata } from "next";
import Talks from "@/components/talks/talks";

export const metadata: Metadata = {
  title: "Talks · Patrick Shubert",
  description: "Recorded talks, podcasts, and panels by Patrick Shubert.",
};

export default function TalksPage() {
  return <Talks />;
}
