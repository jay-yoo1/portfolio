import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

export const Carousel = ({ images }) => {

  return (
   <div>
      {images.map(image => {
        return (
          <div key={`slide_${image.id}`}>
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

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
