import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/constants'

import { gotApiCall } from '../actions'

/**
 * callApi is watching for the CALL_API action to be dispatched.
 * 
 * @param {Object} params
 */
const callApi = function* callApi(params) {
	yield takeLatest(types.CALL_API, fetchFromApi)
}

/**
 * Fetches from our API testing endpoint.
 */
function* fetchFromApi() {
	var response;
	var body;

	try {
		response = yield fetch('/api/');
		body = yield response.json();
	} catch (e) {
		console.error('sagas: test: callApi: Unable to process API request', e);
	}

	if (body)
		yield put(gotApiCall(body))
	else
		console.log('sagas: test: callApi: "body" doesn\'t exist.', body)

}

export default callApi