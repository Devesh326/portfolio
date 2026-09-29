import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand"><Link href="/">Devesh Agarwal</Link><span>© 2026</span></div>
        <div className="footer-links">
          <a href="https://github.com/Devesh326" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/devesh-agarwal-link8421/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="mailto:agarwaldevesh326@gmail.com">Email ↗</a>
        </div>
      </div>
    </footer>
  );
}
