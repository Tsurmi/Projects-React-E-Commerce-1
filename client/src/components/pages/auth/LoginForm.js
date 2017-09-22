import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const styles = {
  loginForm: {
    backgroundColor: '#2c3e50',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
    fontFamily: 'verdana'
  },
  mainForm: {
    backgroundColor: '#2c3e50',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainHeader: {
    backgroundColor: '#2c3e50',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  }
}

const enhancer = injectSheet(styles)

const LoginForm = (props) =>
  <div className={props.classes.mainForm}>
    <div className={props.classes.mainHeader}>
      <h1> Login </h1>
    </div>
    <form className={props.classes.loginForm} onSubmit={props.onSubmit}>
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

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
}

LoginForm.propTypes = propTypes

export default enhancer(LoginForm)
