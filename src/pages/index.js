import React, { useState } from 'react'
import Layout from '@components/layout'

const App = () => {
  const [isLight, setIsLight] = useState(true)

  return (
    <Layout>
      <div
        className={`theme ${isLight ? '' : 'dark'}`}
        onClick={() => {
          setIsLight(!isLight)
        }}
      >
        <div className="index-main">
          <header>
            <a href="https://twitter.com/frencojobs">
              <img
                className="social-icon"
                alt="twitter"
                src="data:image/png;base64,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"
              />
            </a>
          </header>
          <div>
            <h1>
              Hello, I'm Frenco
              <mark>.</mark>
            </h1>
            <h2>
              I am a Software Engineering student from University of Information
              Technology, Myanmar.
            </h2>
          </div>
          <footer>
            <a href="https://github.com/frencojobs">
              <h4>GitHub</h4>
            </a>
            <a href="https://www.linkedin.com/in/frencojobs">
              <h4>LinkedIn</h4>
            </a>
            <a href="https://blog.frenco.codes">
              <h4>Blog</h4>
            </a>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export default App
