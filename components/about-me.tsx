const AboutMe = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
      <div className="prose prose-lg max-w-none">
        <p>
          Hi! I&apos;m Riddhimaan, a research intern at Graphite Growth, an answer engine
          optimization (AEO) company, where I study whether retrieval-augmented generation degrades
          once a model&apos;s own answers find their way back into the corpus it retrieves from. I
          also work on the internal platform and the MCP tooling the team uses to support clients.
        </p>
        <p>
          Last summer I was an AI for Commonwealth intern with the Commonwealth of Massachusetts,
          where I built a RAG chatbot that made the Unity HPC platform&apos;s documentation
          searchable for more than 500 users.
        </p>
        <p>
          Outside of work I keep up with new AI research and contribute to open source, including
          Langfair and Dify. I would rather build something people actually use than something that
          only looks good in a demo.
        </p>
      </div>
    </section>
  )
}

export default AboutMe;
