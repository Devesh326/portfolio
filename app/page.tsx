import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Schematic } from "@/components/Schematic";
import { projects } from "@/data/projects";

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero-grid" aria-labelledby="hero-title">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-rule"/><span className="eyebrow-dot"/> BACKEND / FULL-STACK / SELECTED WORK</p>
            <h1 id="hero-title">Building useful products, from interface to <em>infrastructure.</em></h1>
            <p className="hero-lede">I&apos;m Devesh, a backend and full-stack developer and a tech enthusiast at heart. From hardware and AI to software, I like turning real problems into products that work and systems that can grow.</p>
            <div className="hero-actions"><Link className="button button-dark" href="/work/">Explore my work <span aria-hidden="true">→</span></Link><Link className="text-link" href="/about/">A little about me <span aria-hidden="true">→</span></Link></div>
          </div>
          <Link className="feature-panel" href="/work/job-execution-runtime/" aria-label="Read about the C++ Job Execution Runtime">
            <div className="feature-head"><span>Featured system / 01</span><span className="window-dots" aria-hidden="true"><i/><i/></span></div>
            <div className="feature-body"><h2>C++ Job Execution Runtime</h2><p>A look inside bounded scheduling and execution</p><Schematic kind="runtime" compact /><div className="feature-foot"><span>Concurrency / Cancellation / Observability</span><span aria-hidden="true">↗</span></div></div>
          </Link>
          <div className="scroll-cue"><span>Scroll to explore</span><span aria-hidden="true">↓</span></div>
        </div>
      </section>
      <section className="section shell" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><div><p className="eyebrow blue">01 / SELECTED WORK</p><h2 id="work-heading">Things I&apos;ve built.</h2></div><Link className="section-link" href="/work/">View all projects <span aria-hidden="true">→</span></Link></div>
        <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project}/>)}</div>
      </section>
      <section className="experience-band" aria-labelledby="experience-heading"><div className="shell experience-inner"><div><p className="eyebrow light">02 / IN PRACTICE</p><h2 id="experience-heading">Useful by design. Built to grow.</h2></div><div className="experience-copy"><p>At <strong>Tejas Networks</strong>, I work on production networking software in C++ and Linux. Alongside that, I build across the stack—from product ideas and user experiences to backend architecture. I care about solving a real problem and making the design hold up as it grows.</p><Link className="light-link" href="/about/">More about me <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="contact-section shell" id="contact" aria-labelledby="contact-heading"><p className="eyebrow blue">03 / CONTACT</p><div className="contact-row"><div><h2 id="contact-heading">Let&apos;s talk about what you&apos;re building.</h2><p>A useful product, a backend challenge, or an idea that needs a thoughtful architecture—I&apos;d be glad to hear from you.</p></div><a className="button button-dark" href="mailto:agarwaldevesh326@gmail.com">Get in touch <span aria-hidden="true">↗</span></a></div></section>
    </main>
    <Footer />
  </>;
}
