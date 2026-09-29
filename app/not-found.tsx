import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return <><Header/><main id="main" className="shell not-found"><p className="eyebrow blue">404 / NOT FOUND</p><h1>This page took a different route.</h1><p>The page you were looking for isn&apos;t here.</p><Link className="button button-dark" href="/">Back home <span aria-hidden="true">→</span></Link></main><Footer/></>;
}
