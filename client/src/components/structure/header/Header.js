import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'
import NavItem from './NavItem'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#3498db',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    '& nav > a:hover': {
      backgroundColorcolor: 'red'
    }
  },
  link: {
    padding: 15,
    color: 'black',
    fontSize: 25,
    textDecoration: 'none'
  }
}

const enhancer = injectSheet(styles)

const Header = (props) =>
  <header className={props.classes.header}>
    <nav>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/products'>Products</NavItem>
      <NavItem to='/profile'>Profile</NavItem>
      <NavItem to='/cart'>Cart</NavItem>
      {props.domainData.loggedOut ? <NavItem to='/signup'>Register</NavItem> : null}
      {props.domainData.loggedOut ? <NavItem to='/login'>Log In</NavItem> : null}
      {props.domainData.loggedIn ? <button onClick={props.domainData.logout}> Log Out </button> : null}
    </nav>
  </header>

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

Header.propTypes = propTypes

export default enhancer(Header)
