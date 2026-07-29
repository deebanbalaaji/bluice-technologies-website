import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.116.173.122"],
  turbopack: { root: process.cwd() },
};

export default nextConfig;
