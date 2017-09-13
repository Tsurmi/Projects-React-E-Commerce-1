import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const styles = {
  loginForm: {
    backgroundColor: 'lightblue',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
    fontFamily: 'verdana'
  },
  mainForm: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainHeader: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  }
}
const LoginForm = (props) =>
  <div style={styles.mainForm}>
    <div style={styles.mainHeader}>
      <h1> Login </h1>
    </div>
    <form style={styles.loginForm} onSubmit={props.onSubmit}>
      Email: <input type='text'
        value={props.email}
        onChange={props.onEmailChanged} />
      Password: <input type='text'
        value={props.password}
        onChange={props.onPasswordChanged} />

      <input
        type='submit'
        value='Submit'
      />
    </form>
  </div>

LoginForm.propTypes = propTypes

export default LoginForm
