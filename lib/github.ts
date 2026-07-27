const USERNAME = 'Riddhimaan-Senapati'
const PROFILE_URL = `https://github.com/${USERNAME}`

// Refresh at most once a day. The unauthenticated GitHub API allows 60 requests
// per hour per IP, so a daily revalidation keeps us far inside the limit.
const ONE_DAY_IN_SECONDS = 60 * 60 * 24

export type LanguageUsage = {
  name: string
  repos: number
  share: number
}

export type GitHubStats = {
  profileUrl: string
  projectsBuilt: number
  starsEarned: number
  followers: number
  memberSince: number
  lastActive: string | null
  languages: LanguageUsage[]
}

type GitHubRepo = {
  fork: boolean
  language: string | null
  stargazers_count: number
  pushed_at: string | null
}

// Optional. Without it the REST calls fall back to the unauthenticated 60/hour
// per-IP limit, and the contribution calendar is unavailable entirely (GitHub
// only exposes it through the GraphQL API, which always requires a token).
const token = () => process.env.GITHUB_TOKEN

const authHeader = (): Record<string, string> => {
  const value = token()
  return value ? { Authorization: `Bearer ${value}` } : {}
}

const githubFetch = (path: string) =>
  fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...authHeader(),
    },
    next: { revalidate: ONE_DAY_IN_SECONDS },
  })

/**
 * Public profile stats, counting only repositories Riddhimaan actually wrote —
 * forks of other people's projects are excluded so the numbers mean something.
 *
 * Returns null on any failure (rate limit, outage, schema drift) so a bad
 * response degrades to a plain profile link instead of breaking the build.
 */
export const getGitHubStats = async (): Promise<GitHubStats | null> => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      githubFetch(`/users/${USERNAME}`),
      githubFetch(`/users/${USERNAME}/repos?per_page=100&type=owner&sort=pushed`),
    ])

    if (!userResponse.ok || !reposResponse.ok) return null

    const user = await userResponse.json()
    const allRepos: GitHubRepo[] = await reposResponse.json()
    if (!Array.isArray(allRepos)) return null

    const ownRepos = allRepos.filter((repo) => !repo.fork)

    const repoCountByLanguage = new Map<string, number>()
    for (const repo of ownRepos) {
      if (!repo.language) continue
      repoCountByLanguage.set(repo.language, (repoCountByLanguage.get(repo.language) ?? 0) + 1)
    }

    const classifiedRepos = [...repoCountByLanguage.values()].reduce((sum, n) => sum + n, 0)
    const languages: LanguageUsage[] = [...repoCountByLanguage.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([name, repos]) => ({
        name,
        repos,
        share: classifiedRepos > 0 ? repos / classifiedRepos : 0,
      }))

    const pushDates = ownRepos
      .map((repo) => repo.pushed_at)
      .filter((date): date is string => Boolean(date))
      .sort()

    return {
      profileUrl: PROFILE_URL,
      projectsBuilt: ownRepos.length,
      starsEarned: ownRepos.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0),
      followers: user.followers ?? 0,
      memberSince: new Date(user.created_at).getUTCFullYear(),
      lastActive: pushDates.at(-1) ?? null,
      languages,
    }
  } catch {
    return null
  }
}

export type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type ContributionGraph = {
  totalContributions: number
  weeks: ContributionDay[][]
}

const LEVELS: Record<string, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

const CONTRIBUTIONS_QUERY = `
  query ContributionGraph($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

/**
 * The contribution calendar behind GitHub's green squares. Only the GraphQL API
 * exposes it, and that API rejects unauthenticated requests outright, so this
 * needs GITHUB_TOKEN (scope `read:user` — public data only).
 *
 * Returns null when the token is absent or the request fails, so the section
 * simply omits the graph rather than breaking the page.
 */
export const getContributionGraph = async (): Promise<ContributionGraph | null> => {
  if (!token()) return null

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeader() },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { login: USERNAME },
      }),
      next: { revalidate: ONE_DAY_IN_SECONDS },
    })

    if (!response.ok) return null

    const payload = await response.json()
    const calendar = payload?.data?.user?.contributionsCollection?.contributionCalendar
    if (!calendar?.weeks) return null

    return {
      totalContributions: calendar.totalContributions ?? 0,
      weeks: calendar.weeks.map((week: { contributionDays: unknown[] }) =>
        week.contributionDays.map((day) => {
          const d = day as { date: string; contributionCount: number; contributionLevel: string }
          return {
            date: d.date,
            count: d.contributionCount,
            level: LEVELS[d.contributionLevel] ?? 0,
          }
        })
      ),
    }
  } catch {
    return null
  }
}

// Canonical GitHub Linguist colours, so the bar reads the way people expect.
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  'Jupyter Notebook': '#da5b0b',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Go: '#00add8',
  Rust: '#dea584',
  C: '#555555',
  Shell: '#89e051',
}

export const languageColor = (name: string) => LANGUAGE_COLORS[name] ?? 'hsl(var(--muted-foreground))'
