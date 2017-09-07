import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/products/Products'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  main: {
    position: 'fixed',
    padding: 0,
    top: 28,
    bottom: 25,
    left: 0,
    right: 0
  }
}

const Main = (props) =>
  <main style={styles.main}>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <Products domainData={props.domainData} />} />
  </main>

Main.propTypes = propTypes

export default Main
