import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import React from 'react'
import {NavLink} from 'react-router-dom'

const styles = {
  navLink: {
    textDecoration: 'none',
    fontSize: 25,
    color: 'black',
    paddingRight: 25,
    '&:hover': {
      color: '#f1c40f'
    }
  }
}

const enhancer = injectSheet(styles)

const NavItem = (props) =>
  <NavLink
    to={props.to}
    className={props.classes.navLink} >{props.children}</NavLink>
// We have told our api that we have two prop types, to: and children:

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

export default enhancer(NavItem)
