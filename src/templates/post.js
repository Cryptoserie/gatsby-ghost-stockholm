import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Prism from 'prismjs'
import Helmet from 'react-helmet'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { Tags } from '@tryghost/helpers-gatsby'
import { faUserEdit, faGlobe, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { RecentPosts, RelatedPosts } from '../components/common/posts'
import { AuthorCard } from '../components/common/authors'


import '../styles/nord.less'
/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
library.add(faUserEdit, faGlobe, faHome)

const Post = ({ data, location, pageContext }) => {
    const post = data.ghostPost
    const tags = data.ghostPost.tags
    const series = pageContext.series
    const author = data.ghostAuthor
    const relatedPosts = data.allGhostPost
    const readingTime = readingTimeHelper(post)
    const authorUrl = post.primary_author.slug ? `author/${post.primary_author.slug}` : null

    return (
            <>
                <MetaData
                    data={data}
                    location={location}
                    type="article"
                />
                <Helmet>
                    <style type="text/css">{`${post.codeinjection_styles}`}</style>
                </Helmet>
                <Layout template="post-template">
                    <div className="post-wrapper">
                    <article className="post">
                    { post.feature_image ?
                        <figure className="post-image">
                            <img src={ post.feature_image } alt={ post.title } />
                        </figure> : null }
                        <section className="post-content">
                            {/*{pageContext.series}*/}
                            <h1 className="post-title">{post.title}</h1>
                            <div className="post-meta">
                                <div className="meta-item author"> <Link to="/about"><FontAwesomeIcon icon="user-edit" /><span>{post.primary_author.name}</span> </Link></div>
                                <div className="meta-item tag"> <FontAwesomeIcon icon="tag" />{tags && <Tags post={post} limit={1} visibility="public" autolink={false}/>} </div>
                                <div className="meta-item reading-time"> <FontAwesomeIcon icon="eye" /><span> {readingTime}</span> </div>
                                <div className="meta-item date"> <FontAwesomeIcon icon="eye" />{post.published_at_pretty} </div>
                            </div>
                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                            <div className="post-tags">
                                {/* {tags.map(( slug, name ) => (
                                    <Link to={`tag/${slug}`} className="tag">{name}</Link>
                                  ))} */}
                                <Tags post={post} visibility="public" autolink={true} />
                            </div>
                        </section>

                    </article>

                    </div>
                    <section className="post-footer">
                        <RelatedPosts data={data} />
                        <AuthorCard author={author} />
                    </section>
                </Layout>
            </>
    )
  }

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
            tags: PropTypes.object.isRequired,
        }).isRequired,
        ghostAuthor: PropTypes.object.isRequired,
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
query($slug: String!, $primaryTag: String!, $primaryAuthor: String!) {
    ghostPost(slug: { eq: $slug }) {
        ...GhostPostFields
    }
    ghostAuthor(slug: {eq: $primaryAuthor}) {
      postCount
      location
      facebook
      cover_image
      bio
      name
      slug
      twitter
      website
      profile_image
    }
    allGhostPost(limit: 3, sort: {order: DESC, fields: published_at}, filter: {tags: {elemMatch: {slug: {eq: $primaryTag}}}}) {
      edges {
        node {
          url
          feature_image
          title
          slug
          custom_excerpt
        }
      }
    }
}
`
