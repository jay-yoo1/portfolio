import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import PortfolioScroll from "./PortfolioScroll"
import Carousel from "./Carousel"

const Card = props => {
    const { name, banner, carousel, gallery, } = props

    return (
        <div className="bg-black-0 py-2">
            <div className="container">
                <GatsbyImage
                    image={banner.localFile.childImageSharp.gatsbyImageData}
                    alt={name}
                />
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/3">
                    </div>
                    <div className="w-full lg:w-3/3 pb-8">
                        <Carousel images={carousel} />
                    </div>
                    <div className="w-full lg:w-3/3 pb-8">
                        <PortfolioScroll images={gallery} />
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
    banner {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
    }
    carousel {
        id
        localFile {
            childImageSharp {
                gatsbyImageData
              }
        }
        title
      }
      gallery {
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
      }
    }
`