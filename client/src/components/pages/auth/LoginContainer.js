import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  onEmailChanged = (event) => this.setState({
    email: event.target.value
  })

  onPasswordChanged = (event) => this.setState({
    password: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Hey')
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then((user) => {
        this.props.history.push('/')
        alert(`You are logged in ${user.local.firstName}`)
      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <LoginForm
        email={this.state.email}
        onEmailChanged={this.onEmailChanged}
        password={this.state.password}
        onPasswordChanged={this.onPasswordChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(LoginContainer)
