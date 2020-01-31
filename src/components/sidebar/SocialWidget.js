import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import config from '../../utils/siteConfig'

/**
* Social widget
*/

const SocialWidget = ({ twitterUrl, facebookUrl }) => (
    <>
        <div className="widget social">
            <a href={ twitterUrl } className="twitter" key="twitter-sidebar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={[`fab`, `twitter`]} size="xs" /></a>
            <a href={ config.social.medium } className="medium" key="medium-sidebar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={[`fab`, `medium`]} size="xs" /></a>
            <a href={ config.social.linkedinProfile } className="linkedin" key="linkedin-sidebar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={[`fab`, `linkedin`]} size="xs" /></a>
            <a href={ config.social.github } className="github" key="github-sidebar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={[`fab`, `github`]} size="xs" /></a>
            <a href={ facebookUrl } className="facebook" key="facebook-sidebar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={[`fab`, `facebook`]} size="xs" /></a>
            <a href={ config.social.feedlyProfile } className="rss" key="rss-sidebar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={[`fad`, `rss-square`]} size="xs" /></a>
        </div>
    </>
)

SocialWidget.propTypes = {
    twitterUrl: PropTypes.string,
    facebookUrl: PropTypes.string,
}

export default SocialWidget
