import * as types from '../actions/constants.js'

/**
 * projects reducer
 * 
 * @param {Object[]} state 
 * @param {Object} action 
 */
const test = (state = [], action) => {

    switch (action.type) {
        case types.GOT_API_CALL:
            return [
                action.payload
            ]
        default:
            return state;
    }
}

export default test;