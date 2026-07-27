/**
 * Single source of truth for everything the site says about Riddhimaan.
 *
 * The page components render this, and `buildCorpus()` serialises the same data
 * into the assistant's system prompt — so the chatbot can never drift from what
 * a visitor reads on the page.
 */

export type Bullet = { label: string; detail: string }

export type Experience = {
  role: string
  organization: string
  period: string
  logo: string
  logoAlt: string
  bullets: Bullet[]
  contactEmail?: string
}

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  demo?: string
  website_link?: string
}

export const identity = {
  name: 'Riddhimaan Senapati',
  headline: 'Research intern at Graphite Growth, an answer engine optimization (AEO) company',
  location: 'Amherst, MA',
  github: 'https://github.com/Riddhimaan-Senapati',
  linkedin: 'https://www.linkedin.com/in/riddhimaan-senapati/',
  x: 'https://x.com/riddhimaan04',
  email: 'riddhimaan22@gmail.com',
  resumePath: '/Riddhimaan_Senapati_Machine_Learning_Engineer_Resume.pdf',
}

export const about = [
  'Riddhimaan is a research intern at Graphite Growth, an answer engine optimization (AEO) company, where he studies whether retrieval-augmented generation degrades once a model’s own answers find their way back into the corpus it retrieves from. He also works on the internal platform and the MCP tooling the team uses to support clients.',
  'Last summer he was an AI for Commonwealth intern with the Commonwealth of Massachusetts, where he built a RAG chatbot that made the Unity HPC platform’s documentation searchable for more than 500 users.',
  'Outside of work he keeps up with new AI research and contributes to open source, including Langfair and Dify. He would rather build something people actually use than something that only looks good in a demo.',
]

export const education = [
  {
    school: 'University of Massachusetts Amherst',
    credential: 'M.S. Computer Science, Data Science & AI concentration',
    period: 'Expected Dec 2027',
    detail: 'GPA 3.90/4.0. Manning College of Information and Computer Sciences.',
  },
  {
    school: 'University of Massachusetts Amherst',
    credential: 'B.S. Computer Science, Summa Cum Laude',
    period: 'Dec 2025',
    detail:
      'GPA 3.997/4.0. Honors thesis: "Fortifying LLM Relevance Judgements against Query Injection Attacks". Coursework: Algorithms for Data Science, AI Alignment, Systems for Deep Learning, Software Engineering, Practice & Application of Data Management, Intro to Simulation.',
  },
]

export const experience: Experience[] = [
  {
    role: 'Research Intern',
    organization: 'Graphite Growth, Inc. (AEO), Amherst, MA',
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
        detail:
          'Replicated the HotpotQA distractor benchmark and shipped an agentic-RAG variant with a model-driven retrieve() tool, hardened with async concurrency limits, backoff retries, and tool-call fallbacks.',
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
    contactEmail: 'Riddhimaan.Senapati@mass.gov',
    bullets: [
      {
        label: 'RAG chatbot',
        detail:
          'Built a RAG chatbot (Streamlit, LangChain, AWS Bedrock) for the UMass Unity HPC & AI platform serving 500+ users, presented to the Governor of Massachusetts.',
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

export const projects: Project[] = [
  {
    title: 'DoorSmashOrPass',
    description:
      'A campus food delivery platform that connects students with student couriers while providing AI-powered nutrition coaching.',
    image: '/doorsmashorpass.png',
    tags: ['NextJs', 'ElevenLabs', 'Supabase', 'AWS lambda', 'Gemini API', 'AWS ECR'],
    link: 'https://github.com/icedmoch/doorsmashorpass',
    demo: 'https://youtu.be/9kZN4feIgps',
    website_link: 'https://doorsmash.vercel.app/',
  },
  {
    title: 'Recuvia',
    description:
      'A modern web application designed to help people find their lost items and report found items using AI-powered image and text search capabilities.',
    image: '/Recuvia.png',
    tags: ['NextJs', 'Supabase', 'pgvector', 'postgresql'],
    link: 'https://github.com/Riddhimaan-Senapati/Recuvia',
    website_link: 'https://recuvia.vercel.app/',
  },
  {
    title: 'TL;DR Mail',
    description:
      'AI-powered email assistant to summarize emails, extract key event details, and track deadlines.',
    image: '/tldrmail.png',
    tags: ['NextJs', 'OpenAI', 'Clerk', 'Google API'],
    link: 'https://github.com/Riddhimaan-Senapati/tldrmail',
    demo: 'https://www.youtube.com/watch?v=xUNG3yKc2hk',
    website_link: 'https://tldrmail.us',
  },
  {
    title: 'Plowtion',
    description: 'An AI-powered schedule builder for farmers.',
    image: '/plowtion.png',
    tags: ['Next.Js', 'Docker', 'Tensorflow'],
    link: 'https://github.com/Aadityaa2004/Plowtion',
    demo: 'https://www.youtube.com/watch?v=GYeHbwub1oI',
  },
  {
    title: 'Codestrike',
    description: 'A CS-GO inspired website where you can PvP leetcode problems.',
    image: '/codestrike.png',
    tags: ['React.Js', 'Docker', 'Express.Js', 'Node.Js'],
    link: 'https://github.com/craigbsch/CodeStrike',
    demo: 'https://www.youtube.com/watch?v=qSjl_q2JoYw',
  },
  {
    title: 'Course Advisor',
    description:
      'An AI-powered app to analyze course descriptions, provide recommendations and see professor rankings.',
    image: '/CourseAdvisor.png',
    tags: ['Streamlit', 'OpenAI', 'RESTful API'],
    link: 'https://github.com/Riddhimaan-Senapati/CourseAdvisor',
  },
  {
    title: 'Airport Coordinator',
    description:
      'A website to help international students coordinate their trips for ridesharing.',
    image: '/airport_coordinator.jpg',
    tags: ['React.Js', 'MongoDB', 'Node.Js'],
    link: 'https://github.com/Riddhimaan-Senapati/Airport-Coordinator',
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'AI/ML & LLM',
    items: [
      'LangChain',
      'vLLM / LiteLLM',
      'Hugging Face',
      'PyTorch',
      'TensorFlow',
      'Keras',
      'RAG',
      'LLM-as-judge',
      'GEPA',
      'MCP / FastMCP',
      'pgvector / FAISS / ChromaDB',
      'embeddings',
      'OpenCV',
    ],
  },
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C', 'LaTeX'] },
  {
    group: 'Cloud & MLOps',
    items: [
      'AWS (Bedrock, SageMaker, Lambda, ECS, S3, CloudFormation)',
      'Docker',
      'GitHub Actions',
      'SLURM / HPC',
      'Linux',
      'Vercel',
    ],
  },
  {
    group: 'Web & Data',
    items: [
      'React / React Native',
      'Next.js',
      'Node.js',
      'FastAPI',
      'Flask',
      'Streamlit',
      'REST APIs',
      'Supabase',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Tailwind CSS',
      'Tableau',
    ],
  },
]

export const certifications = [
  {
    name: 'AWS Certified AI Practitioner',
    url: 'https://www.credly.com/badges/42ee21f3-762c-478f-a83c-4e16a6aabfdc/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    url: 'https://www.credly.com/badges/c6b05266-8415-452c-a136-78bbec3697aa/public_url',
  },
]

/** Serialises the profile into the markdown block the assistant is grounded on. */
export const buildProfileCorpus = () => {
  const sections: string[] = []

  sections.push(
    `# ${identity.name}\n${identity.headline}. Based in ${identity.location}.\n` +
      `GitHub: ${identity.github}\nLinkedIn: ${identity.linkedin}\nX: ${identity.x}\n` +
      `Email: ${identity.email}\nRésumé: ${identity.resumePath}`
  )

  sections.push(`## About\n${about.join('\n\n')}`)

  sections.push(
    '## Education\n' +
      education
        .map((e) => `### ${e.school}\n${e.credential} (${e.period})\n${e.detail}`)
        .join('\n\n')
  )

  sections.push(
    '## Experience\n' +
      experience
        .map(
          (job) =>
            `### ${job.role} — ${job.organization}\n${job.period}\n` +
            job.bullets.map((b) => `- ${b.label}: ${b.detail}`).join('\n')
        )
        .join('\n\n')
  )

  sections.push(
    '## Projects\n' +
      projects
        .map(
          (p) =>
            `### ${p.title}\n${p.description}\nTech: ${p.tags.join(', ')}\nCode: ${p.link}` +
            (p.website_link ? `\nLive: ${p.website_link}` : '') +
            (p.demo ? `\nDemo: ${p.demo}` : '')
        )
        .join('\n\n')
  )

  sections.push(
    '## Skills\n' + skills.map((s) => `- ${s.group}: ${s.items.join(', ')}`).join('\n')
  )

  sections.push(
    '## Certifications\n' + certifications.map((c) => `- ${c.name} (${c.url})`).join('\n')
  )

  return sections.join('\n\n')
}
