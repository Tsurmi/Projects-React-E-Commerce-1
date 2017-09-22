import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const styles = {
  pListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'solid #3498db 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  productHeader: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const enhancer = injectSheet(styles)

const ProductList = (props) =>
  <div>
    <div className={props.classes.productHeader}>

      <button className={props.classes.button}> <Link className={props.classes.link} to='/products/add'>Add A Product</Link> </button>
    </div>
    <div className={props.classes.pListContainer}>
      {
        props.domainData.products.map(product =>
          <ProductCard
            key={product._id}
            product={product}
            onDelete={() => props.domainData.deleteProduct(product._id)}
            onEdit={() => props.history.push(`/products/edit/${product._id}`)}
            onAddToCart={() => props.domainData.addToCart(product._id)} 
          />
        )
      }
    </div>
  </div>

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
}
ProductList.propTypes = propTypes

export default enhancer(ProductList)
