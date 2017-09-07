import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const styles = {
  list: {
    fontSize: 20,
    textDecoration: 'none',
    color: 'green'

  }
}
const ProductList = (props) =>
  <div>

    <Link style={styles.list} to='/products/add'>Add Product</Link>

    {props.domainData.products.map(product =>
      <ProductCard
        key={product.id}
        product={product}
        onEdit={() => props.history.push(`/products/edit/${product._id}`)}
      />
    )
    }
  </div>

ProductList.propTypes = propTypes
export default ProductList
