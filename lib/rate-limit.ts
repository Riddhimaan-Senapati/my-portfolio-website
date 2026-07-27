import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// The Vercel Upstash integration injects KV_REST_API_*; a manually created
// database uses UPSTASH_REDIS_REST_*. Accept either.
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
const restToken = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN

const limiter =
  url && restToken
    ? new Ratelimit({
        redis: new Redis({ url, token: restToken }),
        // Generous for a curious human, useless for a script.
        limiter: Ratelimit.slidingWindow(10, '1 m'),
        analytics: true,
        prefix: 'portfolio-chat',
      })
    : null

export const rateLimitConfigured = limiter !== null

export type RateLimitResult = {
  success: boolean
  remaining: number
  reset: number
}

/**
 * Per-IP sliding window. Returns success when Upstash isn't configured so local
 * development and un-provisioned deploys still work — BotID remains in front.
 */
export const checkRateLimit = async (identifier: string): Promise<RateLimitResult> => {
  if (!limiter) return { success: true, remaining: -1, reset: 0 }

  try {
    const { success, remaining, reset } = await limiter.limit(identifier)
    return { success, remaining, reset }
  } catch {
    // A Redis outage should not take the chat down with it.
    return { success: true, remaining: -1, reset: 0 }
  }
}

export const clientIp = (request: Request) =>
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
  request.headers.get('x-real-ip') ??
  'anonymous'
