import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "About Devesh Agarwal: backend and full-stack development, useful products, scalable architecture, and curiosity across technology.",
};

export default function AboutPage() {
  return <>
    <Header active="about" />
    <main id="main">
      <div className="shell page-intro"><p className="eyebrow blue">ABOUT / DEVESH AGARWAL</p><h1>Curious about what technology can <em>make possible.</em></h1><p>I&apos;m a backend and full-stack developer in Bengaluru who likes building products that solve real problems.</p></div>
      <div className="shell about-layout">
        <div className="about-label"><p className="eyebrow blue">01 / MY APPROACH</p><h2>Build for people. Design for scale.</h2></div>
        <div className="about-prose">
          <p>I like taking an idea all the way to something people can use: understanding the problem, shaping the experience, building the backend, and designing an architecture that can grow with it.</p>
          <p>My curiosity has taken me across hardware, AI, web applications, and systems software. I enjoy learning how the pieces fit together and choosing the right approach for the problem, rather than defining myself by one language or layer of the stack.</p>
          <p>At Tejas Networks, I work on production networking software. My experience spans C++, Ethernet L2 CFM/OAM, Linux debugging, NETCONF/YANG, and performance work. It has taught me to think carefully about reliability, observability, and how software behaves beyond a demo.</p>
          <p>My own projects reflect that range. DocumentGen is a product-minded documentation workflow built around GitHub. The distributed SQL project explores routing and sharded storage. The C++ Job Execution Runtime focuses on concurrency and process supervision. Across them, I care about both the problem being solved and the decisions that let a solution scale.</p>
          <div className="about-facts"><div className="about-fact"><span>Current work</span><strong>R&amp;D · Tejas Networks<br/>Bengaluru, India</strong></div><div className="about-fact"><span>Areas of focus</span><strong>Backend · Full-stack development<br/>Product architecture · Systems</strong></div></div>
          <div className="about-personal"><span>Beyond the screen</span><p>When I&apos;m away from code, you&apos;ll usually find me playing guitar or table tennis.</p></div>
        </div>
      </div>
      <section className="experience-band" aria-labelledby="about-contact-heading"><div className="shell experience-inner"><div><p className="eyebrow light">02 / CONNECT</p><h2 id="about-contact-heading">Good ideas grow through conversation.</h2></div><div className="experience-copy"><p>If you&apos;re building a product, solving a backend challenge, or thinking through an architecture, I&apos;d like to hear about it.</p><a className="light-link" href="mailto:agarwaldevesh326@gmail.com">Send me an email <span aria-hidden="true">↗</span></a></div></div></section>
    </main>
    <Footer />
  </>;
}
