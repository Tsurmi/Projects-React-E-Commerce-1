import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProfileContainer from '../pages/ProfileContainer'
import Products from '../pages/products/Products'
import Cart from '../pages/cart/Cart'
import SignUpFormContainer from '../pages/auth/SignUpFormContainer'
import LoginContainer from '../pages/auth/LoginContainer'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  main: {
    position: 'fixed',
    padding: 0,
    top: 50,
    bottom: 25,
    left: 0,
    right: 0
  }
}

const Main = (props, i) =>
  <main key={i} style={styles.main}>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <Products domainData={props.domainData} />} />
    <Route path='/signup' render={() => <SignUpFormContainer domainData={props.domainData} />} />
    <Route path='/login' render={() => <LoginContainer domainData={props.domainData} />} />
    <Route path='/profile' render={(routeProps) => <ProfileContainer domainData={props.domainData} history={routeProps.history} />} />
    <Route path='/cart' render={() => <Cart domainData={props.domainData} />} />
  </main>

Main.propTypes = propTypes

export default Main
