import React from 'react'
import NavItem from './NavItem'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  link: {
    padding: 15,
    color: 'white',
    fontSize: 25,
    textDecoration: 'none'
  }
}

const Header = () =>
  <header style={styles.header}>
    <nav>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/products'>Products</NavItem>
    </nav>
  </header>

export default Header
