import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ReactPlayer from 'react-player'

import { Layout } from '../components/common'
import { AuthorList } from '../components/authors'
import { MetaData } from '../components/common/meta'

import '../styles/pages/index.less'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = ({ data, location, pageContext }) => {
    const page = data.ghostPage

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
            />
            <Layout template="page-template" hasSidebar={true}>
                <article className="post-content page-content">
                    { page.feature_image ?
                        <figure className="post-feature-image">
                            <img src={ page.feature_image } alt={ page.title } />
                        </figure> : null }
                    <h1 className="content-title">{page.title}</h1>
                    { page.slug === `about` ?
                        <div className="about-video-wrapper">
                            <ReactPlayer url="https://vimeo.com/265866802" width="100%" height="100%" className="about-video" />
                        </div>
                        : null }
                    {/* The main page content */}
                    <section
                        className="content-body load-external-scripts"
                        dangerouslySetInnerHTML={{ __html: page.html }}
                    />
                    { pageContext.slug === `about` ? <AuthorList /> : null }
                </article>
            </Layout>
        </>
    )
}

Page.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    pageContext: PropTypes.shape({
        slug: PropTypes.string.isRequired,
    }),
    location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
