import { ExperienceCard } from '@components/ExperienceCard'
import { ProjectCard } from '@components/ProjectCard'
import { Octokit } from '@octokit/rest'
import { GetStaticProps, NextPage } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import data from '../data.json'

function isProject(v: Project | Array<Project>): v is Project {
  return !(v instanceof Array)
}

type Props = {
  stars: Array<{ owner: string; name: string; count: number }>
}

const IndexPage: NextPage<Props> = ({ stars }) => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleDarkMode = (checked: boolean) => {
    const isDarkMode = checked
    if (isDarkMode) setTheme('dark')
    else setTheme('light')
  }

  const isDarkMode = resolvedTheme === 'dark'

  return (
    <main className="w-full p-5 mx-auto font-sans md:max-w-4xl">
      <div className="h-5" />
      <header className="flex flex-col-reverse items-start md:justify-between md:items-center md:flex-row">
        <div>
          <h1 className="text-3xl font-bold">Frenco</h1>
          <p className="text-lg font-medium text-gray-500 dark:text-gray-300">
            Software Engineer, Student at UIT
          </p>
        </div>

        {mounted && (
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="mb-5 md:mb-0"
          />
        )}
      </header>
      <div className="h-10" />
      <section className="relative">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <div className="h-5" />

        <div className="absolute top-0 left-0 flex-col items-end hidden mt-20 transform -rotate-6 -ml-60 lg:flex">
          <h1 className="mb-2 font-serif text-2xl">
            is on{' '}
            <a className="text-red-600 border-b-2 border-dashed dark:text-red-400">
              Product Hunt
            </a>{' '}
            now!
          </h1>
          <img
            src={`/arrow-${isDarkMode ? 'light' : 'dark'}.gif`}
            className="w-20 h-20"
          />
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(data.projects as Array<Project | Array<Project>>).map((x, idx) =>
            isProject(x) ? (
              <ProjectCard
                key={idx}
                item={x}
                star={
                  stars.find(
                    (s) => s.owner === x.repo.owner && s.name === x.repo.name
                  )?.count
                }
              />
            ) : (
              <ul
                className="flex flex-col items-stretch justify-between gap-4"
                key={idx}>
                {x.map((y, idy) => (
                  <ProjectCard
                    key={idy}
                    item={y}
                    useFlex
                    star={
                      stars.find(
                        (s) =>
                          s.owner === y.repo.owner && s.name === y.repo.name
                      )?.count
                    }
                  />
                ))}
              </ul>
            )
          )}
        </ul>
      </section>
      <div className="h-10" />
      <section>
        <h1 className="text-2xl font-bold">Work Experience &amp; Education</h1>
        <div className="h-5" />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(data.experiences as Array<Experience>).map((x, id) => (
            <ExperienceCard key={id} item={x} />
          ))}
        </ul>
      </section>
      <div className="h-10" />
      <section>
        <h1 className="text-2xl font-bold">Contacts</h1>
        <div className="h-5" />
        <span className="text-lg">
          You can always drop me a quick mail to{' '}
          <span className="font-bold text-blue-600 underline dark:text-blue-400">
            hey@frenco.dev
          </span>{' '}
          if you&apos;re interested in working with me. Also check out my other
          social media presences.
        </span>

        <div className="h-10" />

        <footer className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-row flex-wrap items-center justify-between w-full max-w-xl">
            {data.links.map((link, id) => (
              <li key={id}>
                <a
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                  className="font-bold text-blue-600 underline dark:text-blue-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <span className="mt-5 text-sm md:mt-0">Frenco &copy; 2021</span>
        </footer>
      </section>
      <div className="h-5" />
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const octokit = new Octokit()
  const projects = data.projects
  const stars: Array<{ owner: string; name: string; count: number }> = []

  for (const project of projects.flat()) {
    // const res = await octokit.repos.get({
    //   owner: project.repo.owner,
    //   repo: project.repo.name,
    // })
    // const count = res.data.stargazers_count
    // stars.push({ owner: project.repo.owner, name: project.repo.name, count })
  }

  return {
    props: {
      stars,
    },
  }
}

export default IndexPage
