import * as types from './constants.js'

export const addProject = (payload) => ({
  type: types.ADD_PROJECT,
  payload
})

/*
 * These are for testing API calls from the Landing page... 
 */

export const callApi = () => ({
  type: types.CALL_API
})

export const gotApiCall = (payload) => ({
  type: types.GOT_API_CALL,
  payload
})