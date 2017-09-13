import React from 'react'

const styles = {
  about: {
    backgroundColor: 'grey',
    width: '100vw',
    height: '100vh',
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
    fontSize: '20'
  }
}

const About = () =>
  <div style={styles.about}>
    <div style={styles.aboutMain}>
      <h1> All About US!</h1>
      <img style={styles.thumbnail} src='http://images.gawker.com/185hvnhrtmlkdjpg/c_fit,fl_progressive,q_80,w_636.jpg' />
    </div>
  </div>

export default About
