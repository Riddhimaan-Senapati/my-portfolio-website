import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // The chat route reads the résumé PDF and the blog markdown at runtime. Next's
  // tracer can't follow those dynamic fs reads, so they must be declared or the
  // deployed function would 404 on them and silently fall back to a thinner corpus.
  outputFileTracingIncludes: {
    '/api/chat': ['./content/blog/**', './public/*.pdf'],
  },
  turbopack: {
    // Pin the workspace root: an unrelated lockfile in the parent directory otherwise
    // makes Next infer the wrong root.
    root: import.meta.dirname,
  },
};

// withBotId adds the proxy rewrites BotID needs so ad-blockers can't defeat it.
export default withBotId(nextConfig);
