import React from 'react'
import PropTypes from 'prop-types'
import '@styles/_base.scss'

import SEO from '@components/seo'

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
