import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"
import portfolioItem from "../templates/portfolio-item"

const Cards = ({ items }) => {
  return (
    <div className="container">
      <div className="">
        {items.map(item => (
          <div
            className={classNames("",)}
            key={item.id}
          >
            <portfolioItem {...item} />
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  )

}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards