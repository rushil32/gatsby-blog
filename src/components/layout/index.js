/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useSpring, animated } from 'react-spring'
import Nav from '../nav';
import toriiLogo from "../../images/logos/torii-color-2.svg"
import "./layout.css"
import "../../styles/base.scss"

const Layout = ({ children }) => {
  const navLinks = [
    {
      text: 'Me',
      url: '/',
    },
    {
      text: 'Ramen UI',
      url: '/library',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
    {
      text: 'Picks',
      url: '/picks',
    }
  ];

  const transition = useSpring({
    config: { duration: 200 },
    opacity: 1,
    from: {opacity: 0}
  });

  return (
    <div>
      <Nav links={navLinks} logo={toriiLogo} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <animated.main style={transition}>{children}</animated.main>
        <footer>
          © {new Date().getFullYear()} Because 42
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
