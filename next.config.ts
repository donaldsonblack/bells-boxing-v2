import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["motion"],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
