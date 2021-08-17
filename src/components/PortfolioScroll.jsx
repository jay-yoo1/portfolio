import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

export const PortfolioScroll = ({ images }) => {

  return (
   <div>
      {images.map(image => {
        return (
          <div className="py-5">
            <Img
              fluid={image.localFile.childImageSharp.fluid}
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
