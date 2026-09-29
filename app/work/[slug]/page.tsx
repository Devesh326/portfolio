import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schematic } from "@/components/Schematic";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex(item => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const kind = slug === "job-execution-runtime" ? "runtime" : slug === "distributed-sql" ? "sql" : "docs";

  return <>
    <Header active="work" />
    <main id="main">
      <div className="shell case-hero"><Link className="back-link" href="/work/"><span aria-hidden="true">←</span> All work</Link><div className="case-hero-inner"><p className="eyebrow blue">{project.number} / {project.eyebrow}</p><h1>{project.title}<em>.</em></h1><p className="case-lead">{project.lead}</p><div className="case-meta"><span>{project.status}</span>{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div></div></div>
      <div className="shell case-art"><Schematic kind={kind}/></div>
      <div className="shell case-content"><div className="case-sidebar">THE STORY / {project.number}</div><div className="case-story"><section><h2>The problem</h2><p>{project.problem}</p></section><section><h2>The approach</h2><p>{project.approach}</p></section><section><h2>What matters in the design</h2><div className="detail-list">{project.details.map((detail, idx) => <div className="detail-item" key={detail.title}><span>0{idx+1}</span><div><h3>{detail.title}</h3><p>{detail.body}</p></div></div>)}</div></section><div className="case-note"><span>Scope note</span><p>{project.note}</p></div>{project.links && <div className="case-links">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}</div></div>
      <div className="shell next-project"><div><span>Next project</span><h2>{next.title}</h2></div><Link href={`/work/${next.slug}/`} aria-label={`Read about ${next.title}`}>↗</Link></div>
    </main>
    <Footer />
  </>;
}
