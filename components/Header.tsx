import Link from "next/link";

export function Header({ active }: { active?: "work" | "about" }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Devesh Agarwal — home">
          <span className="brand-mark">D</span>
          <span className="brand-copy"><strong>Devesh Agarwal</strong><small>Backend / Full-stack</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/work/" aria-current={active === "work" ? "page" : undefined}>Work</Link>
          <Link href="/about/" aria-current={active === "about" ? "page" : undefined}>About</Link>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:agarwaldevesh326@gmail.com">Let&apos;s connect <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
