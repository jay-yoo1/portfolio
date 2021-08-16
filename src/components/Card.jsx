import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import PortfolioScroll from "./PortfolioScroll"
import Carousel from "./Carousel"

const Card = props => {
  const { name, carousel, gallery,} = props

  return (
      <div className="bg-gray-0 py-2">
        <div className="container">
          <div className="flex flex-wrap">
          <div className="w-full lg:w-3/3">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-2">
                {name}
              </h1>
            </div>
            <div className="w-full lg:w-3/3 pb-8">
              {carousel && carousel.length === 1 && (
                <Img
                  fluid={carousel[0].localFile.childImageSharp.fluid}
                  alt={name}
                />
              )}
              {carousel && carousel.length > 1 && <Carousel images={carousel} />}
            </div>
            <div className="w-full lg:w-3/3 pb-8">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].localFile.childImageSharp.fluid}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <PortfolioScroll images={gallery} />}
            </div>
          </div>
        </div>
      </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    carousel {
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
    }
`