import * as types from '../actions/constants'

const INITIAL_STATE = {
  authUser: null,
  providerGithubToken: null,
  errorSignUp: false,
  errorLogin: false,
  errorMessage: null,
  isAuthenticated: false
};

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.AUTH_USER_SET:
      {
        console.log("Setting user auth")
        return {
          ...state,
          authUser: action.user,
        }
      }

    // TODO: We have redundant functionalities here (above and below),
    // best to figure out right way to go about this
    case types.EMAIL_USER_SIGN_UP_SUCCESS:
      {
        console.log('Email signup successful!');
        return {
          ...state,
          authUser: action.user
        }
      }
    case types.EMAIL_USER_SIGN_UP_FAILURE:
      {
        console.log('Error signing up with Email', action.err);
        return {
          ...state,
          authUser: action.user,
          errorSignUp: true,
          errorMessage: action.err.message
        }
      }
    case types.GITHUB_USER_LOGIN_SUCCESS:
      {
        console.log('Github Login successful! Token:', action.token);
        return {
          ...state,
          authUser: action.user,
          providerGithubToken: action.token
        }
      }
    case types.GITHUB_USER_LOGIN_FAILURE:
      {
        console.log('Error logging in with Github', action.err);
        return {
          ...state,
          errorMessage: action.err.message,
          errorLogin: true
        }
      }
    default:
      return state;
  }
}

export default sessionReducer;