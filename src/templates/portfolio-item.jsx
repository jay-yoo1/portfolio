import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Carousel from "../components/Carousel"
import Newsletter from "../components/Newsletter"
import Layout from "../layouts/Layout"

export default props => {
  const {
    gallery,
    name,
  } = props.data.item

  return (
    <Layout>
      <SiteMetadata
        title={name}
      />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 pb-8">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].localFile.childImageSharp.fluid}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
                {name}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPortfolio(slug: { eq: $slug }) {
      gallery {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 960, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
      name
    }
  }
`
