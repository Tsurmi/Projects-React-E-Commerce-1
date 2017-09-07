import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const AddProductForm = (props) =>
  <div>
    <h1> Add Product </h1>
    <form onSubmit={props.onSubmit}>
      Name: <input type='text'
        value={props.name}
        onChange={props.onNameChanged} />
      Category: <input type='text'
        value={props.category}
        onChange={props.onCategoryChanged} />
      Image: <input type='text'
        value={props.image}
        onChange={props.onImageChanged} />
      Price: <input type='number'
        value={props.price}
        onChange={props.onPriceChanged} />

      <input
        type='submit'
        value='Submit Form'
        disabled={!props.name || !props.category || !props.image || props.price <= 0}
      />
    </form>

    <Link to='/products'>Cancel</Link>
  </div>

AddProductForm.propTypes = propTypes

export default AddProductForm
