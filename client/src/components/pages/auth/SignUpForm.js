import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string,
  onEmailChanged: PropTypes.func,
  password: PropTypes.string,
  onPasswordChanged: PropTypes.func,
  firstName: PropTypes.string,
  onFirstNameChanged: PropTypes.func,
  lastName: PropTypes.string,
  onLastNameChanged: PropTypes.func,
  onSubmit: PropTypes.func
}

const styles = {
  form: {
    backgroundColor: 'lightblue',
    width: '100vw',
    height: '100vh'
  }
}
const SignUpForm = (props) =>
  <div style={styles.form}>
    <h1> Sign Up </h1>
    <form onSubmit={props.onSubmit}>
      First Name: <input type='text'
        value={props.firstName}
        onChange={props.onFirstNameChanged} />
      Last Name: <input type='text'
        value={props.lastName}
        onChange={props.onLastNameChanged} />
      Email: <input type='text'
        value={props.email}
        onChange={props.onEmailChanged} />
      Password: <input type='text'
        value={props.password}
        onChange={props.onPasswordChanged} />

      <input
        type='submit'
        value='Submit Form'
      />
    </form>
  </div>

SignUpForm.propTypes = propTypes

export default SignUpForm
