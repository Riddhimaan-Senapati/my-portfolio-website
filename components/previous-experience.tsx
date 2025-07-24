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
            <li>Built an innovative Retrieval Augmented Generation (RAG) chatbot using streamlit, LangChain, AWS Bedrock for the UMass Unity HPC &
            AI platform, serving 500+ users with technical support hosted at the Massachusetts Green High Performance Computing Center (MGHPCC).</li>
            <li>Engineered an automated data pipeline for AWS Knowledge Base, leveraging AWS Lambda and EventBridge to refresh 164+ documents weekly, ensuring data accuracy and currency for 500+ users.</li>
            <li>Implemented CI/CD pipeline with GitHub Actions, Docker and AWS CloudFormation to deploy and manage application on AWS ECS with
            99.99% uptime.</li>
            <li>Enhanced accessibility to MGHPCC resources, reducing average support response time by 30%. </li>
             <li>For more details you may contact me <a href="mailto:Riddhimaan.Senapati@mass.gov" className="text-blue-500 underline">here</a></li>
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
            <li>Created awithn authenticated admin page for clients to manage quiz questions without coding, enhancing content flexibility.</li>
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