import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React from "react"

export const PortfolioScroll = ({ images }) => {

  return (
   <div>
      {images.map(image => {
        return (
          <div className="py-5">
            <GatsbyImage
              image={image.localFile.childImageSharp.gatsbyImageData}
              alt={image.title}
            />
          </div>
        )
      })}
    </div>
  )
}

PortfolioScroll.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PortfolioScroll
