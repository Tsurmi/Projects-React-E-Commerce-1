import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import AddressFields from './AddressFields'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Checkout = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <AddressFields domainData={props.domainData} addressType={'billing'} />
        <AddressFields domainData={props.domainData} addressType={'shipping'} />
        <div>
          Order Total: ${props.domainData.totalCart()}
        </div>

        <button type='submit'> Place Order</button>
      </form>
    </div>
  )
}

Checkout.propTypes = propTypes

export default Checkout
