import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { AiOutlineTags } from 'react-icons/ai'

const RelatedPosts = ({ data }) => {
  const related = data.edges

  return (
    <>
      <div className="related-posts">
        {related.map(({ node }) => (
          <Link to={`/${node.slug.includes(`lynx`) ? `/roundup/${node.slug}` : node.slug}/`} className="related-post-card" key={node.ghostId}>
            <div className="related-post-image-wrapper"><img className="related-post-image lazyload" data-src={node.feature_image} alt={node.slug} /></div>
            <div className="related-post-info">
              <h5 className="related-post-title">{node.title}</h5>
              <div className="related-post-tags">
                <AiOutlineTags className="tags-icon" />
                <Tags
                  post={node}
                  limit={2}
                  visibility="public"
                  autolink={false}
                  classes="tag"
                  separator=", "
                  separatorClasses={`${node.ghostId} tag-separator`}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

RelatedPosts.propTypes = {
  data: PropTypes.object,
}

export default RelatedPosts
