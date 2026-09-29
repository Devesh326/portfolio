import Link from "next/link";
import type { Project } from "@/data/projects";
import { Schematic } from "@/components/Schematic";

export function ProjectCard({ project }: { project: Project }) {
  const kind = project.slug === "job-execution-runtime" ? "runtime" : project.slug === "distributed-sql" ? "sql" : "docs";
  return (
    <Link className="project-card" href={`/work/${project.slug}/`}>
      <div className="card-top"><span>{project.number} / {project.eyebrow}</span><span aria-hidden="true">↗</span></div>
      <Schematic kind={kind} compact />
      <div className="card-content"><h3>{project.title}</h3><p>{project.summary}</p></div>
      <div className="card-bottom"><span>{project.status}</span><span>View case study <span aria-hidden="true">↗</span></span></div>
    </Link>
  );
}
