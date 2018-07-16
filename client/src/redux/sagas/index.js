import { all, fork } from 'redux-saga/effects'
import handleNewProject from './projects';
import callApi from './test';

export default function* rootSaga() {

	yield all([
		fork(handleNewProject),
		fork(callApi)
	])

}