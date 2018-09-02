import {
    all,
    fork
} from 'redux-saga/effects'

import {
    handleNewProject
} from './projects'

import {
    handleProviderLogin,
    handleEmailLoginAndSignUp
} from './session'

export default function* rootSaga() {
    yield all([
        fork(handleNewProject),
        fork(handleProviderLogin),
        fork(handleEmailLoginAndSignUp),
    ])
}