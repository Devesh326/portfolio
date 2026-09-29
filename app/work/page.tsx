import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected backend, full-stack, systems, and developer-tool projects by Devesh Agarwal.",
};

export default function WorkPage() {
  return <>
    <Header active="work" />
    <main className="work-page" id="main">
      <div className="shell page-intro"><p className="eyebrow blue">INDEX / 01—03</p><h1>Selected <em>work.</em></h1><p>Three projects from different parts of the stack, each shaped by a practical problem and the architecture needed to solve it.</p></div>
      <section className="section shell" aria-label="Project index"><div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project}/>)}</div></section>
      <div className="shell work-afterword"><h2>What connects these projects?</h2><p>Each starts with a job to be done, then asks what the software needs to make it useful and reliable. That might mean controlled execution, clear data routing, or a documentation workflow people can review and trust.</p></div>
    </main>
    <Footer />
  </>;
}
