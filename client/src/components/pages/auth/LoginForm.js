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
  login: {
    backgroundColor: 'lightblue',
    width: '100vw',
    height: '100vh'
  }
}
const LoginForm = (props) =>
  <div style={styles.login}>
    <h1> Login </h1>
    <form onSubmit={props.onSubmit}>
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
