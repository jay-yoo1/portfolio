import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Carousel from "../components/Carousel"

const Card = props => {
  const { name, slug, summary, thumbnail, description,
    gallery,} = props

  return (
      <div className="bg-gray-0 py-2">
        <div className="container">
          <div className="flex flex-wrap">
          <div className="w-full lg:w-3/3">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-2">
                {name}
              </h1>
              <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
                {summary}
              </h2>
              {description && (
                <div className="my-4 text-base text-gray-700 whitespace-pre-line">
                  {description.description}
                </div>
              )}
            </div>
            <div className="w-full lg:w-3/3 pb-8">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].localFile.childImageSharp.fluid}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            
          </div>
        </div>
      </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    slug
    thumbnail {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    summary
    description {
        description
      }
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
      summary
      thumbnail {
        localFile {
          publicURL
        }
      }
      url
    }
`