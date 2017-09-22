import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductList from './ProductList'
import AddProductContainer from './AddProductContainer'
import EditProductContainer from './EditProductContainer'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  product: {
    backgroundColor: '#2c3e50',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    padding: 10,
    overflow: 'scroll'
  },
  p: {
    color: 'white',
    fontFamily: 'Palatino',
    fontSize: 40,
    margin: 20,
    textAlign: 'center'
  }
}

const enhancer = injectSheet(styles)

const Products = (props) =>
  <div className={props.classes.product}>
    <h1 className={props.classes.p} >Coffee Selection</h1>
    <Route
      path='/products' exact
      render={(routeProps) => <ProductList
        domainData={props.domainData}
        history={routeProps.history} />} />
    <Route
      path='/products/add'
      exact render={(routeProps) => <AddProductContainer
        domainData={props.domainData}
        history={routeProps.history} />}
    />
    <Route
      path='/products/edit/:productId'
      render={(routeProps) => <EditProductContainer
        domainData={props.domainData}
        history={routeProps.history}
        match={routeProps.match}
      />
      }
    />
  </div>
Products.propTypes = {
  classes: PropTypes.object.isRequired
}

Products.propTypes = propTypes

export default enhancer(Products)
