import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const styles = {
  navLink: {
    textDecoration: 'none',
    fontSize: 25,
    color: 'black',
    paddingRight: 25
  }
}
const NavItem = (props) =>
  <NavLink to={props.to} style={styles.navLink} >{props.children}</NavLink>
// We have told our api that we have two prop types, to: and children:

NavItem.propTypes = propTypes

export default NavItem
