import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery } from 'gatsby';

const Meta = ({name, description, slug, image}) => (
    <StaticQuery
        query={query}
        render={data => (
            <Helmet>
                <title>{name}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={data.site.siteMetadata.siteUrl + slug} />

                {/* Facebook */}
                <meta property="og:url" content={data.site.siteMetadata.siteUrl + slug} />
                
                <meta property="og:title" content={name} />
                <meta property="og:image" content={image} />
                <meta property="og:description" content={description} />

                {/* Twitter */}
                <meta name="twitter:url" content={data.site.siteMetadata.siteUrl + slug} />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        )}
    />
)

const query = graphql`
    query {
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`

export default Meta;