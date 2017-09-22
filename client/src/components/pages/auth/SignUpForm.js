import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

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
    backgroundColor: '#2c3e50',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
    fontFamily: 'verdana',
    fontSize: 20
  },
  signHeader: {
    backgroundColor: '#2c3e50',
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
    backgroundColor: '#2c3e50',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const enhancer = injectSheet(styles)

const SignUpForm = (props) => {
  return (
    <div className={props.classes.mainSign}>
      <div className={props.classes.signHeader}>
        <h1> Register New User </h1>
        <img className={props.classes.thumbnail} src='http://www.freeiconspng.com/uploads/add-user-icon--icon-search-engine-28.png' />
      </div>
      <form className={props.classes.form} onSubmit={props.onSubmit}>
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

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired
}

SignUpForm.propTypes = propTypes

export default enhancer(SignUpForm)
