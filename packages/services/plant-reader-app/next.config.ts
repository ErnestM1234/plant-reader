import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@plant-reader/db'],
};

export default nextConfig;
