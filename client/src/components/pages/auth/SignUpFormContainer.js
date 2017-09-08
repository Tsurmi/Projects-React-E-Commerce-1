import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import SignUpForm from './SignUpForm'

class SignUpFormContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  onEmailChanged = (event) => this.setState({
    email: event.target.value
  })

  onPasswordChanged = (event) => this.setState({
    password: event.target.value
  })

  onFirstNameChanged = (event) => this.setState({
    firstName: event.target.value
  })

  onLastNameChanged = (event) => this.setState({
    lastName: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault()
    console.log('On Submit triggered')
    this.props.domainData.signUpUser(this.state)
    this.props.history.push('/')
  }

  render () {
    return (
      <SignUpForm
        email={this.state.email}
        onEmailChanged={this.onEmailChanged}
        password={this.state.password}
        onPasswordChanged={this.onPasswordChanged}
        firstName={this.state.firstName}
        onFirstNameChanged={this.onFirstNameChanged}
        lastName={this.state.lastName}
        onLastNameChanged={this.onLastNameChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(SignUpFormContainer)
