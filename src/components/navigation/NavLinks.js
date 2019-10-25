import React from 'react'
import PropTypes from 'prop-types'
import config from '../../utils/siteConfig'
import { Link } from 'gatsby'


const NavLinks = ({ navigation }) => (
    <>
      {navigation.map((navItem, i) => {
          if (navItem.url.includes(`rss`) || navItem.url.includes(`sitemap`)) {
              return <a className="navigation-link" href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a>
          } else if (navItem.url.includes(config.siteUrl)) {
              return <Link className="navigation-link" to={`${navItem.url.split(`/`).pop()}`} key={i} >{navItem.label}</Link>
          } else {
              return <a className="navigation-link" href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a>
          }
      })}
  </>
)


export default NavLinks