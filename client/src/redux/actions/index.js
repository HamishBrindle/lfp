import * as types from './constants'

/*
 * Authentication
 */
export const emailSignUp = (email, passwordOne, username) => ({
  type: types.EMAIL_USER_SIGN_UP,
  email,
  passwordOne,
  username,
})

export const emailSignUpSuccess = (user) => ({
  type: types.EMAIL_USER_SIGN_UP_SUCCESS,
  user
})

export const emailSignUpFailure = (err) => ({
  type: types.EMAIL_USER_SIGN_UP_FAILURE,
  err
})

export const emailLogin = (email, password) => ({
  type: types.EMAIL_USER_LOGIN,
  email,
  password
})

export const emailLoginSuccess = (user) => ({
  type: types.EMAIL_USER_LOGIN_SUCCESS,
  user
})

export const emailLoginFailure = (err) => ({
  type: types.EMAIL_USER_LOGIN_FAILURE,
  err
})

export const authUserSet = (user) => ({
  type: types.AUTH_USER_SET,
  user
})

export const usersSet = (users) => ({
  type: types.USERS_SET,
  users
})

export const githubLogin = () => ({
  type: types.GITHUB_USER_LOGIN
})

export const githubLoginSuccess = (token, user) => ({
  type: types.GITHUB_USER_LOGIN_SUCCESS,
  token,
  user
})

export const githubLoginFailure = (err) => ({
  type: types.GITHUB_USER_LOGIN_FAILURE,
  err
})

/*
 * Projects
 */
export const addProject = (project) => ({
  type: types.ADD_PROJECT,
  project
})