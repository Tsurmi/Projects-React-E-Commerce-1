import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

const styles = {
  profileCard: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: [5, 'solid', 'blue'],
    fontSize: 20,
    margin: [25, 50],
    padding: 50
  },
  firstNameCard: {
    color: 'black'
  },
  lastNameCard: {
    color: 'black'
  },
  emailCard: {
    color: 'black'
  }
}

const enhancer = injectSheet(styles)

const Profile = (props) => {
  return (
    <div className={props.classes.profileCard}>
      <div className={props.classes.firstNameCard}>First Name: {props.firstName}</div>
      <div className={props.classes.lastNameCard}>Last Name: {props.lastName}</div>
      <div className={props.classes.emailCard}>Email: {props.email}</div>
    </div>
  )
}

Profile.propTypes = propTypes

Profile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default enhancer(Profile)
