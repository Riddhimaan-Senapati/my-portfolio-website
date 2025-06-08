import Image from 'next/image'

const PreviousExperience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">💼 Previous Experience</h2>
      
      <div className="space-y-12">
        {/* AI for Commonwealth Internship */}
        <div>
          <div className="flex items-center mb-2">
            <Image src="/AI4CW_logo.png" alt="AI for Commonwealth Logo" width={40} height={40} className="mr-4" />
            <h3 className="text-2xl font-semibold">AI for Commonwealth Intern</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-1">Commonwealth of Massachusetts</p>
          <p className="text-sm text-muted-foreground mb-4">April 2025 – Present</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Contributed to a team developing an innovative RAG (Retrieval Augmented Generation) chatbot for the UMass Unity High-Performance Computing (HPC) center.</li>
            <li>Built the frontend with Streamlit and architected the RAG pipeline using AWS Bedrock for the backend.</li>
            <li>Created a knowledge base by scraping over 164+ documentation links, enhancing user support and accessibility for HPC resources.</li>
          </ul>
        </div>

        {/* BUILD UMass Amherst Internship */}
        <div>
          <div className="flex items-center mb-2">
            <Image src="/BUILD_UMass_logo.jpeg" alt="BUILD UMass Amherst Logo" width={40} height={40} className="mr-4" />
            <h3 className="text-2xl font-semibold">Full Stack Software Developer</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-1">BUILD UMass Amherst, Amherst, MA</p>
          <p className="text-sm text-muted-foreground mb-4">Sep 2024 – Present</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Developed a React Native quiz app with local storage for offline access, boosting user satisfaction by 25%.</li>
            <li>Created an authenticated admin page for clients to manage quiz questions without coding, enhancing content flexibility.</li>
          </ul>
        </div>

        {/* LTIMindtree Internship */}
        <div>
          <div className="flex items-center mb-2">
            <Image src="/LTIMindtree_logo.png" alt="LTIMindtree Logo" width={40} height={40} className="mr-4" />
            <h3 className="text-2xl font-semibold">Data and Analytics (D&A) Intern</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-1">LTIMindtree, Chennai, India</p>
          <p className="text-sm text-muted-foreground mb-4">Dec 2023 – Jan 2024</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Analyzed Database Migration from SQL Server to Microsoft Fabric, designing benchmark functions with 1000+ queries.</li>
            <li>Leveraged Azure OpenAI to automate SQL query conversion, improving development time by 25%.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PreviousExperience