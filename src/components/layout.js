import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '@styles/_base.scss'

import SEO from '@components/seo'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.svg" />
      </Helmet>
      <SEO />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
