import React from 'react'
import { github, twitter, blog } from 'urls'
import 'assets/main.css'
import wavy from 'assets/wave.png'

function App() {
  return (
    <div className="w-5/6 md:w-3/4 mx-auto py-6">
      <nav>
        <h1 className="font-sans font-black text-lg">
          Frenco &middot; Student &middot; Software Engineer
        </h1>
      </nav>
      <div className="mt-12 w-full md:w-4/5">
        <h2 className="font-sans font-black text-3xl md:text-4xl text-oc">
          I am Frenco. I live in Myanmar. I do some opensource projects on{' '}
          <a
            href={github}
            className="text-github bg-github bg-opacity-0 hover:bg-opacity-25 rounded px-1"
          >
            GitHub
          </a>
          .
          <br />I ocassionally write on my{' '}
          <a
            href={blog}
            className="text-blog bg-blog bg-opacity-0 hover:bg-opacity-25 rounded px-1"
          >
            Blog
          </a>
          .
          <br />
          <img
            src={wavy}
            className="w-1/4 md:w-1/6 py-4"
            alt="wavy separator"
          />
          Follow your dreams. And if possible, kindly follow me on{' '}
          <a
            href={twitter}
            className="text-twitter bg-twitter bg-opacity-0 hover:bg-opacity-25 rounded px-1"
          >
            Twitter
          </a>{' '}
          as well.
        </h2>
      </div>
    </div>
  )
}

export default App
