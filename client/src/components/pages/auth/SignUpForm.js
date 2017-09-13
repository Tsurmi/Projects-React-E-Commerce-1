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
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
    fontFamily: 'verdana',
    fontSize: '20'
  },
  signHeader: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  thumbnail: {
    width: '30%'
  },
  mainSign: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const SignUpForm = (props) => {
  return (
    <div style={styles.mainSign}>
      <div style={styles.signHeader}>
        <h1> Register New User </h1>
        <img style={styles.thumbnail} src='http://www.freeiconspng.com/uploads/add-user-icon--icon-search-engine-28.png' />
      </div>
      <form style={styles.form} onSubmit={props.onSubmit}>
        First Name: <input type='text'
          value={props.firstName}
          onChange={props.onFirstNameChanged}
        />
        Last Name: <input type='text'
          value={props.lastName}
          onChange={props.onLastNameChanged}
        />
        Email: <input type='text'
          value={props.email}
          onChange={props.onEmailChanged}
        />
        Password: <input type='text'
          value={props.password}
          onChange={props.onPasswordChanged}
        />
        <input 
          type='submit'
          value='Submit User'
        />
      </form>
    </div>
  )
}

SignUpForm.propTypes = propTypes

export default SignUpForm
