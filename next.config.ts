import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // The chat route reads the blog markdown and the build-time résumé extract at
  // runtime. Next's tracer can't follow those dynamic fs reads, so they must be
  // declared or the deployed function would silently fall back to a thinner corpus.
  outputFileTracingIncludes: {
    '/api/chat': ['./content/**'],
  },
  turbopack: {
    // Pin the workspace root: an unrelated lockfile in the parent directory otherwise
    // makes Next infer the wrong root.
    root: import.meta.dirname,
  },
};

// withBotId adds the proxy rewrites BotID needs so ad-blockers can't defeat it.
export default withBotId(nextConfig);
