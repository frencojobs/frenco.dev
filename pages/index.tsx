import { ProjectCard } from '@components/ProjectCard'
import { NextPage } from 'next'

import data from '../data.json'

function isProject(v: Project | Array<Project>): v is Project {
  return !(v instanceof Array)
}

const IndexPage: NextPage = () => {
  return (
    <main className="w-full p-5 mx-auto md:max-w-4xl">
      <header>
        <h1 className="text-3xl font-bold">Frenco</h1>
        <p className="text-lg font-medium text-gray-500">
          Software Engineer, Student at UIT
        </p>
      </header>
      <div className="h-10" />
      <section>
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="h-5" />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(data as Array<Project | Array<Project>>).map((x, idx) =>
            isProject(x) ? (
              <ProjectCard key={idx} item={x} />
            ) : (
              <ul
                className="flex flex-col items-stretch justify-between gap-4"
                key={idx}>
                {x.map((y, idy) => (
                  <ProjectCard key={idy} item={y} useFlex />
                ))}
              </ul>
            )
          )}
        </ul>
      </section>
      <div className="h-10" />
      <section>
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <div className="h-5" />
      </section>
    </main>
  )
}

export default IndexPage
