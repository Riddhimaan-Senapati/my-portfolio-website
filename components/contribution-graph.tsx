import type { ContributionGraph as Graph } from '@/lib/github'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const formatDay = (date: string, count: number) => {
  const readable = new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
  return `${count === 0 ? 'No contributions' : `${count} contribution${count === 1 ? '' : 's'}`} on ${readable}`
}

/** Month label sits above the first week in which that month appears. */
const monthLabels = (weeks: Graph['weeks']) => {
  const labels: { index: number; label: string }[] = []
  let previousMonth = -1

  weeks.forEach((week, index) => {
    const firstDay = week[0]
    if (!firstDay) return
    const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth()
    if (month !== previousMonth) {
      labels.push({ index, label: MONTHS[month] })
      previousMonth = month
    }
  })

  return labels
}

const ContributionGraph = ({ graph }: { graph: Graph }) => {
  const labels = monthLabels(graph.weeks)

  return (
    <figure className="mt-10">
      <figcaption className="mb-3 text-sm text-muted-foreground">
        {graph.totalContributions.toLocaleString('en-US')} contributions in the last year
      </figcaption>

      {/* Wide grid scrolls inside its own container so the page never scrolls sideways. */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-block min-w-max">
          <div className="relative mb-1 h-4">
            {labels.map(({ index, label }) => (
              <span
                key={`${label}-${index}`}
                className="absolute text-xs text-muted-foreground"
                style={{ left: `calc(${index} * (0.75rem + 3px))` }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {graph.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <span
                    key={day.date}
                    title={formatDay(day.date, day.count)}
                    data-level={day.level}
                    className="contribution-day h-3 w-3 rounded-[2px]"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span
            key={level}
            aria-hidden="true"
            data-level={level}
            className="contribution-day h-3 w-3 rounded-[2px]"
          />
        ))}
        <span>More</span>
      </div>
    </figure>
  )
}

export default ContributionGraph
