import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"

const Cards = ({ items }) => {
  return (
    <div className="container">
      <div className="">
        {items.map(item => (
          <div
            className={classNames("",)}
            key={item.id}
          >
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