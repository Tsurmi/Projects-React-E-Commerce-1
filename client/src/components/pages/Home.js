import React from 'react'

const styles = {
  home: {
    backgroundImage: `url(https://pbs.twimg.com/media/CUmGoUVVEAES895.jpg)`,
    width: '100vw',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    scrollBehavior: 'smooth'
  },
  homeHeader: {
    fontFamily: 'verdana',
    fontSize: 20,
    color: 'white'
  }
}
const Home = () =>
  <div style={styles.home}>
    <div style={styles.homeHeader}>
      <h1> Union Made Goods </h1>
    </div>
  </div>

export default Home
