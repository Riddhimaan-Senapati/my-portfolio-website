import Image from 'next/image'
import { AnimatedGroup } from '@/components/ui/animated-group'

type Experience = {
  role: string
  organization: string
  period: string
  logo: string
  logoAlt: string
  bullets: { label: string; detail: React.ReactNode }[]
}

const experiences: Experience[] = [
  {
    role: 'Research Intern',
    organization: 'Graphite Growth, Inc. (answer engine optimization), Amherst, MA',
    period: 'Feb 2026 – Aug 2026',
    logo: '/graphitehq_logo.jpeg',
    logoAlt: 'Graphite Growth Logo',
    bullets: [
      {
        label: 'RAG collapse research',
        detail:
          'Investigating whether retrieval-augmented generation degrades when its own AI-generated answers re-enter the retrieval corpus, mentored by Graphite’s Chief AI Officer.',
      },
      {
        label: 'GPU evaluation stack',
        detail:
          'Built a vLLM/LiteLLM serving and evaluation stack with an LLM-as-judge harness, orchestrating 100+ dual-GPU SLURM jobs across a 1,400-question benchmark.',
      },
      {
        label: 'Prompt optimization',
        detail:
          'Built a GEPA reflective prompt-optimizer with an entity-clustering collapse metric and ran multi-objective Pareto search over anti-collapse vs. answer quality.',
      },
      {
        label: 'Agentic RAG benchmark',
        detail: (
          <>
            Replicated the HotpotQA distractor benchmark and shipped an agentic-RAG variant with a
            model-driven <code className="rounded bg-muted px-1 py-0.5 text-[0.9em]">retrieve()</code> tool,
            hardened with async concurrency limits, backoff retries, and tool-call fallbacks.
          </>
        ),
      },
      {
        label: 'HPC orchestration',
        detail:
          'Re-architected the job launcher to co-locate inference servers and client in a single GPU allocation, with idempotent, resumable submission that hardened a 108-job sweep against cluster outages.',
      },
      {
        label: 'Semantic search',
        detail:
          'Shipped pgvector/HNSW prompt matching over SageMaker embeddings, surfacing the top 5 of a 10,000+ prompt bank in 9 ms.',
      },
      {
        label: 'Sampling methodology',
        detail:
          'Quantified how many ChatGPT responses are needed for reliable brand-visibility estimates across 10,800+ responses, establishing that 10 responses put ~93% of prompts within 10% error and cutting sampling cost up to 5×.',
      },
      {
        label: 'MCP tooling',
        detail:
          'Exposed platform operations as MCP tools so the assistant reaches parity with the web app, computing the topic-ambiguity signal concurrently for zero added latency.',
      },
    ],
  },
  {
    role: 'AI & AWS Intern',
    organization: 'AI for Commonwealth of Massachusetts (Mass.Gov), Amherst, MA',
    period: 'Apr 2025 – Sept 2025',
    logo: '/AI4CW_logo.png',
    logoAlt: 'AI for Commonwealth Logo',
    bullets: [
      {
        label: 'RAG chatbot',
        detail: (
          <>
            Built a RAG chatbot (Streamlit, LangChain, AWS Bedrock) for the UMass Unity HPC &amp; AI
            platform serving 500+ users, presented to the Governor of Massachusetts.
          </>
        ),
      },
      {
        label: 'Automated data pipeline',
        detail:
          'Engineered an event-driven AWS Lambda and EventBridge pipeline refreshing 164+ documents weekly into a Bedrock Knowledge Base.',
      },
      {
        label: 'Model selection',
        detail:
          'Implemented Anthropic-style contextual retrieval via a custom-chunking Lambda and benchmarked four Bedrock models (Claude, Llama, Amazon Nova) on cost, latency, and accuracy.',
      },
      {
        label: 'CI/CD',
        detail:
          'Deployed to AWS ECS with 99.99% uptime using GitHub Actions, Docker, and CloudFormation, cutting average support response time by 30%.',
      },
      {
        label: 'More details',
        detail: (
          <>
            For more details you may contact me{' '}
            <a
              href="mailto:Riddhimaan.Senapati@mass.gov"
              className="text-blue-500 underline underline-offset-2"
            >
              here
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    role: 'Full Stack Software Developer',
    organization: 'BUILD UMass Amherst, Amherst, MA',
    period: 'Sep 2024 – Dec 2025',
    logo: '/BUILD_UMass_logo.jpeg',
    logoAlt: 'BUILD UMass Amherst Logo',
    bullets: [
      {
        label: 'Mobile app',
        detail:
          'Built a cross-platform React Native (Expo) LLM chatbot with offline-first SQLite storage.',
      },
      {
        label: 'Admin dashboard',
        detail:
          'Shipped a Next.js dashboard with JWT auth on an Express/MongoDB backend for a non-profit serving 100+ users.',
      },
    ],
  },
  {
    role: 'AI/ML Intern',
    organization: 'LTIMindtree, Chennai, India',
    period: 'Dec 2023 – Jan 2024',
    logo: '/LTIMindtree_logo.png',
    logoAlt: 'LTIMindtree Logo',
    bullets: [
      {
        label: 'Migration benchmarking',
        detail:
          'Designed benchmark functions analyzing a SQL Server to Microsoft Fabric migration across 1,000+ queries.',
      },
      {
        label: 'LLM automation',
        detail:
          'Optimized the Azure OpenAI API to convert SQL queries between formats, improving query development time by 25%.',
      },
    ],
  },
]

const PreviousExperience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        💼 Previous Experience
      </h2>

      <AnimatedGroup
        preset="blur-slide"
        className="space-y-12"
        amount={0.05}
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          },
        }}
      >
        {experiences.map((experience) => (
          <div key={`${experience.organization}-${experience.role}`}>
            <div className="flex items-center mb-2">
              <Image
                src={experience.logo}
                alt={experience.logoAlt}
                width={40}
                height={40}
                className="mr-4 h-10 w-10 rounded object-contain"
              />
              <h3 className="text-2xl font-semibold">{experience.role}</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-1">{experience.organization}</p>
            <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-muted-foreground">
              {experience.bullets.map((bullet) => (
                <li key={bullet.label}>
                  <span className="font-semibold">{bullet.label}:</span>
                  <span className="text-muted-foreground"> {bullet.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AnimatedGroup>
    </section>
  )
}

export default PreviousExperience
