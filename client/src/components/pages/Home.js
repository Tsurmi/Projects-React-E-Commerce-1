import React from 'react'

const styles = {
  home: {
    backgroundImage: `url(http://www.barmelusine.com/uploads/_800x800_crop_center-center_75/gallery-01.jpg)`,
    width: '100vw',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    scrollBehavior: 'smooth'
  }
}
const Home = () =>
  <div style={styles.home}></div>

export default Home
