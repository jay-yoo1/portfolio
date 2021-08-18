import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React from "react"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 1,
    slidesToShow: 1,

  slide: '> div',

    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {images.map(image => {
        return (
          <div>
            <GatsbyImage
              image={image.localFile.childImageSharp.gatsbyImageData}
              alt={image.title}
            />
          </div>
        )
      })}
    </Slider>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
