import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  about: {
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
    fontFamily: 'verdana'
  },
  aboutMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'verdana',
    fontSize: 20,
    color: 'lightblue'
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    opacity: 0.8
  }
}

const enhancer = injectSheet(styles)

const About = (props) =>
  <div className={props.classes.about}>
    <div className={props.classes.aboutMain}>
      <img className={props.classes.thumbnail} src='http://i65.tinypic.com/af9ann.jpg' />
    </div>
  </div>

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default enhancer(About)
