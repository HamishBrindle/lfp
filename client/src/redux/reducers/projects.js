import * as types from '../actions/constants.js'

/**
 * projects reducer
 * 
 * @param {Object[]} state 
 * @param {Object} action 
 */
const projects = (state = [], action) => {
    switch (action.type) {
        case types.ADD_PROJECT:
            console.log('reducers: projects: Adding project | action: ', action)
            return state;
        default:
            return state;
    }
}

export default projects;