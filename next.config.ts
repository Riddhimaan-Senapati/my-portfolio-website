import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Pin the workspace root: an unrelated lockfile in the parent directory otherwise
    // makes Next infer the wrong root.
    root: import.meta.dirname,
  },
};

export default nextConfig;
