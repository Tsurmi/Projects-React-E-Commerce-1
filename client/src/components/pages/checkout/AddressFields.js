import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData,
  addressType: PropTypes.string.isRequired
}

const AddressFields = (props) => {
  return (
    <div>
      {
        props.addressType === 'billing' ? <h1> Billing Address</h1> : <h1>Shipping Address</h1>
      }
      <label>Street Name</label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'street', props.addressType)}
      />
      <label> City</label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'city', props.addressType)}
      />
      <label>State</label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'state', props.addressType)}
      />
      <label>Zip Code</label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'zip', props.addressType)}
      />
      <label> Country</label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'country', props.addressType)}
      />
    </div>
  )
}

AddressFields.propTypes = propTypes

export default AddressFields
