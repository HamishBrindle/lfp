import { takeEvery } from 'redux-saga/effects'
import * as types from '../actions/constants'

/**
 * handleNewProjects
 * 
 * @param {Object} params
 */
const handleNewProject = function* handleNewProject(params) {

	yield takeEvery(types.ADD_PROJECT, (action) => {

		console.log('sagas: handleNewProject: Adding new project:', action);

	})

}

export default handleNewProject