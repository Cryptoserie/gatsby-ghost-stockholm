import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RelatedPosts = ({ data }) => {
    const related = data.edges

    return (
      <>
          <div className="related-posts">
              {related.map(({ node }) => (
                  <Link to={ node.slug } className="related-post-card" key={`${ node.slug }-related`}>
                      <div className="related-post-image-wrapper"><img className="related-post-image lazyload" data-src={ node.feature_image } alt={ node.slug }/></div>
                      <div className="related-post-info">
                          <h5 className="related-post-title"> { node.title } </h5>
                          <div className="meta-item related-post-tags">
                              <FontAwesomeIcon icon={[`far`, `tag`]} /><Tags post={node} limit={2} visibility="public" autolink={false} classes="tag" separator=", " separatorClasses="tag-separator"/>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
      </>
    )
}

RelatedPosts.propTypes = {
    data: PropTypes.shape({
        relatedPosts: PropTypes.arrayOf(
            PropTypes.shape({
                ghostId: PropTypes.string,
                feature_image: PropTypes.string,
                title: PropTypes.string,
                slug: PropTypes.string,
            }),
        ),
    }).isRequired,
}

export default RelatedPosts
