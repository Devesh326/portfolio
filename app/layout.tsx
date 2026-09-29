import type { Metadata } from "next";
import { Mascot } from "@/components/Mascot";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Devesh Agarwal — Backend & Full-Stack Developer", template: "%s — Devesh Agarwal" },
  description: "Devesh Agarwal is a backend and full-stack developer building useful products and scalable systems across software, AI, and hardware.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}<Mascot /></body></html>;
}
