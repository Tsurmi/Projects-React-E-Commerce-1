import React from 'react'
import injectSheet from 'react-jss'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  home: {
    backgroundRepeat: 'no-repeat'
  },
  homeHeader: {
    fontFamily: 'verdana',
    fontSize: 20,
    color: 'lightblue'
  },
  thumbnail: {
    width: '100%',
    height: '100%'
  }
}

const enhancer = injectSheet(styles)

const Home = (props) =>
  <div className={props.classes.home}>
    <div className={props.classes.homeHeader}>
      <img className={props.classes.thumbnail} src='http://i65.tinypic.com/wu45dv.jpg' />
    </div>
  </div>

Home.propTypes = {
  classes: propTypes.object
}
export default enhancer(Home)
