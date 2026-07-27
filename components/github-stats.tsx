import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getGitHubStats, getContributionGraph, languageColor, type GitHubStats as Stats } from '@/lib/github'
import ContributionGraph from '@/components/contribution-graph'

const PROFILE_URL = 'https://github.com/Riddhimaan-Senapati'

const formatLastActive = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

const StatTile = ({ value, label }: { value: string | number; label: string }) => (
  <div className="rounded-lg border border-border p-4">
    <p className="text-3xl font-bold tracking-tight tabular-nums">{value}</p>
    <p className="mt-1 text-sm text-muted-foreground">{label}</p>
  </div>
)

const LanguageBreakdown = ({ languages }: { languages: Stats['languages'] }) => (
  <div className="mt-8">
    <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
      {languages.map((language) => (
        <div
          key={language.name}
          style={{
            width: `${language.share * 100}%`,
            backgroundColor: languageColor(language.name),
          }}
          title={`${language.name}: ${language.repos} ${language.repos === 1 ? 'repository' : 'repositories'}`}
        />
      ))}
    </div>
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {languages.map((language) => (
        <li key={language.name} className="flex items-center gap-2 text-sm">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: languageColor(language.name) }}
          />
          <span>{language.name}</span>
          <span className="text-muted-foreground">{Math.round(language.share * 100)}%</span>
        </li>
      ))}
    </ul>
  </div>
)

const GitHubStats = async () => {
  const [stats, contributions] = await Promise.all([getGitHubStats(), getContributionGraph()])

  return (
    <section id="github-stats" className="py-24">
      <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        GitHub Stats
      </h2>

      {stats === null ? (
        <p className="text-muted-foreground">
          Stats are unavailable right now.{' '}
          <Link
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            View the profile on GitHub
          </Link>
          .
        </p>
      ) : (
        <>
          <p className="mb-8 text-muted-foreground">
            Counting only repositories I wrote, so forks of other people&apos;s projects are left
            out.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatTile value={stats.projectsBuilt} label="Projects built" />
            <StatTile value={stats.languages.length} label="Languages used" />
            <StatTile value={stats.starsEarned} label="Stars earned" />
            <StatTile value={stats.followers} label="Followers" />
          </div>

          {stats.languages.length > 0 && <LanguageBreakdown languages={stats.languages} />}

          {/* Omitted unless GITHUB_TOKEN is set — the calendar is GraphQL-only. */}
          {contributions && <ContributionGraph graph={contributions} />}

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span>On GitHub since {stats.memberSince}</span>
            {stats.lastActive && (
              <>
                <span aria-hidden="true">·</span>
                <span>Last push {formatLastActive(stats.lastActive)}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <Link
              href={stats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-foreground hover:underline underline-offset-4"
            >
              View profile
              <ArrowUpRight className="ml-0.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </>
      )}
    </section>
  )
}

export default GitHubStats
