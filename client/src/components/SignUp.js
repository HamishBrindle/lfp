import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import SignUpForm from '../containers/SignUpForm'

import * as routes from '../constants/routes'

const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm history={history} />
    </div>
  )
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
}