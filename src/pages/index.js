import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import {Link} from 'gatsby'

import Layout from '../components/layout';
import Meta from '../components/meta'

//Resources
// import '../../scss/layouts/feed.scss';
import {Facebook, Twitter} from 'react-feather';
import HeaderImage from '../img/rottnest-lighthouse-2500.jpg';
import AmyKate from '../img/amykate.jpg';
import AimHigher from '../img/aimhigher.png';
import Freelance from '../img/freelancers.png';

const profiles = {
    'amykate': {
      'title': 'Amy Goes to Perth',
      'id': 'amykate',
      'image': AmyKate,
      'url': ''
    },
    'AimHigher': {
      'title': 'AimHigher Web Design',
      'id': 'aimhigher',
      'image': AimHigher,
      'url': 'https://aimhigherwebdesign.com.au'
    },
    'Freelance': {
      'title': "Freelancer's Guide",
      'id': 'freelance',
      'image': Freelance,
      'url': 'https://thefreelance.guide/'
    },
  };

export default class IndexPage extends React.Component {
    render() {
        // const {data} = this.props;
        // const {edges: posts} = data.allMarkdownRemark;
        const meta = {
            // name: data.site.siteMetadata.title,
            // description: data.site.siteMetadata.description,
            slug: '/',
            image: HeaderImage
        }

        return (
            <Layout>
                <Meta details={meta} />
                <h1>Hello World</h1>
            </Layout>
        )
    }
}

// IndexPage.propTypes = {
//     data: PropTypes.shape({
//       allMarkdownRemark: PropTypes.shape({
//         edges: PropTypes.array,
//       }),
//     }),
// }

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `