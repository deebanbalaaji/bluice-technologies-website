import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.116.173.122"],
  experimental: { optimizePackageImports: ["next-sanity"] },
};

export default nextConfig;
