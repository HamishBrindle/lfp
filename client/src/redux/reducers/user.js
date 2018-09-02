import * as types from '../actions/constants'

const INITIAL_STATE = {
  users: {},
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USERS_SET:
      {
        return {
          ...state,
          users: action.users
        }
      }
    default:
      return state;
  }
}

export default userReducer;