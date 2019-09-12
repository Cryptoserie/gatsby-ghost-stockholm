import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'

const RecentPosts = ({ data }) => {
    const posts = data.allGhostPost.edges

    return (
      <>
          <div className="recent-posts">
              {posts.map(({ node }) => (
                  <Link to={ node.slug } className="recent-post-card" key={ node.name }>
                      <img className="recent-post-image" src={ node.feature_image } alt={ node.slug }/>
                      <h5 className="recent-post-title"> { node.title } </h5>
                  </Link>
              ))}
          </div>
      </>
    )
}

RecentPosts.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
}

const RecentPostsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostRecentPostsQuery {
              allGhostPost(limit: 3, sort: {order: DESC, fields: published_at}) {
                edges {
                  node {
                    url
                    feature_image
                    title
                    slug
                  }
                }
              }
            }`
        }
        render={data => <RecentPosts data={data} {...props} />}
    />
)

export default RecentPostsQuery