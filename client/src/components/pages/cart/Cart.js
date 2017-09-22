import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  cartCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: [2, 'solid', 'blue'],
    fontSize: 30,
    margin: [25, 50]
  },
  emptyCart: {
    fontSize: 18
  }
}

const enhancer = injectSheet(styles)

const Cart = (props) => {
  console.log(props.domainData)
  const cartKeys = Object.keys(props.domainData.cart)
  console.log(cartKeys)
  return (
    <div>
      <h1 className={props.classes.cartCard}>Your Cart Items</h1>
      <div>
        {
          cartKeys.length ?
            <div>{
              props.domainData.products.map((product, i) => {
                if (cartKeys.indexOf(product._id) > -1) {
                  return (
                    <div key={i}>
                      <h1>{product.name}</h1>
                      <h3> Quantity of Item:{props.domainData.cart[product._id]}</h3>
                      <button type='button' onClick={() => props.domainData.removeFromCart(product._id)}>Remove Item</button>
                      <button type='button' onClick={() => props.domainData.addToCart(product._id)}>Add Item</button>
                    </div>
                  )
                }
              })
            }<div>
              <h3> Total:  ${props.domainData.totalCart()}</h3>
              <Link to='/checkout'>Checkout</Link>
            </div>
            </div>
            : <h1 className={props.classes.emptyCart}>Your Cart is Empty</h1>
        }
      </div>
    </div>
  )
}
Cart.propTypes = {
  classes: PropTypes.object.isRequired
}

Cart.propTypes = propTypes

export default enhancer(Cart)