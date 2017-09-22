import React from 'react'

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
const Home = () =>
  <div style={styles.home}>
    <div style={styles.homeHeader}>
      <img style={styles.thumbnail} src='http://i65.tinypic.com/wu45dv.jpg' />
    </div>
  </div>

export default Home
