import PropTypes from 'prop-types'
import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

const ProductCard = (props, i) =>
  <div key={i}>
    <h1>{props.product.name}</h1>
    <h2>{props.product.category}</h2>
    <h3>{props.product.price}</h3>
    <button onClick={props.onEdit}>Edit</button>
    <button onClick={props.onDelete}>Delete</button>
  </div>

ProductCard.propTypes = propTypes

export default ProductCard
