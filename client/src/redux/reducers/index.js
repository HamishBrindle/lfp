import { combineReducers } from 'redux'
import projects from './projects'
import test from './test'

/**
 * Reducers need to be combined into one for Redux to process them
 */
const reducers = combineReducers({
    projects,
    test
  });
  
  export default reducers
