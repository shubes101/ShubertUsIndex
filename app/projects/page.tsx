import type { Metadata } from "next";
import Projects from "@/components/projects/projects";

export const metadata: Metadata = {
  title: "Projects · Patrick Shubert",
  description: "Things Patrick Shubert has built or shipped.",
};

export default function ProjectsPage() {
  return <Projects />;
}
