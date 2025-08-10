import Image from 'next/image'

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">✅ Technical Skills</h2>
      
      <table className="w-full text-left border border-gray-200 border-collapse">
        <tbody>
          <tr>
            <td className="font-bold py-2 px-4 border-r border-b border-gray-200">Programming Languages</td>
            <td className="py-2 px-4 border-b border-gray-200 flex flex-wrap gap-2 items-center">
              <Image alt="C" src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=black" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="HTML" src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="CSS" src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="LaTeX" src="https://img.shields.io/badge/Latex-008080?style=flat-square" width={160} height={32} className="h-7 w-auto" unoptimized />
            </td>
          </tr>

          <tr>
            <td className="font-bold py-2 px-4 border-r border-b border-gray-200">ML / AI Frameworks</td>
            <td className="py-2 px-4 border-b border-gray-200 flex flex-wrap gap-2 items-center">
              <Image alt="TensorFlow" src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Keras" src="https://img.shields.io/badge/Keras-D00000?style=flat-square&logo=keras&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="OpenCV" src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="HuggingFace" src="https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black" width={160} height={32} className="h-7 w-auto" unoptimized />
            </td>
          </tr>

          <tr>
            <td className="font-bold py-2 px-4 border-r border-b border-gray-200">Frameworks & Libraries</td>
            <td className="py-2 px-4 border-b border-gray-200 flex flex-wrap gap-2 items-center">
              <Image alt="React" src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Flask" src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Streamlit" src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
            </td>
          </tr>

          <tr>
            <td className="font-bold py-2 px-4 border-r border-b border-gray-200">Databases</td>
            <td className="py-2 px-4 border-b border-gray-200 flex flex-wrap gap-2 items-center">
              <Image alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="ChromaDB" src="https://img.shields.io/badge/ChromaDB-525252?style=flat-square" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Supabase" src="https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
            </td>
          </tr>

          <tr>
            <td className="font-bold py-2 px-4 border-r border-gray-200">Tools & Platforms</td>
            <td className="py-2 px-4 flex flex-wrap gap-2 items-center">
              <Image alt="AWS" src="https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=amazon-web-services&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Git" src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="VS Code" src="https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?style=flat-square&logo=vsc&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
              <Image alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" width={160} height={32} className="h-7 w-auto" unoptimized />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Skills

