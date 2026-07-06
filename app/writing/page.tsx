import type { Metadata } from "next";
import Writing from "@/components/writing/writing";

export const metadata: Metadata = {
  title: "Writing · Patrick Shubert",
  description: "Published research and reports by Patrick Shubert.",
};

export default function WritingPage() {
  return <Writing />;
}
