import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/portfolio',
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { workerThreads: true, cpus: 1 },
};

export default nextConfig;
