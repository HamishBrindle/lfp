import {
    takeLatest,
    put
} from 'redux-saga/effects'
import * as types from '../actions/constants'
import {
    auth,
    db
} from '../../firebase'
import {
    githubLoginSuccess,
    githubLoginFailure,
    emailSignUpSuccess,
    emailSignUpFailure,
    emailLoginSuccess,
    emailLoginFailure
} from '../actions'

/**
 * Handle logins using providers (Github, Facebook, etc)
 */
const handleProviderLogin = function* handleProviderLogin(params) {
    yield takeLatest(types.GITHUB_USER_LOGIN, github)
}

function* github(action) {
    console.log('sagas: github: Attempting to login via Github:', action)

    try {
        const result = yield auth.doSignInWithGithub()
        console.log("result: ", result)
        yield put(githubLoginSuccess(result.credential.accessToken, action.user))
    } catch (err) {
        console.log('Error logging in with Provider', err)
        yield put(githubLoginFailure(err))
    }
}

/**
 * Handle logins and signups using emails
 */
const handleEmailLoginAndSignUp = function* handleEmailLoginAndSignUp(params) {
    yield takeLatest(types.EMAIL_USER_LOGIN, emailLogin)
    yield takeLatest(types.EMAIL_USER_SIGN_UP, emailSignUp)
}

function* emailSignUp(action) {
    console.log('sagas: emailSignUp: Attempting to signup via email:', action.email)

    try {
        // Attempt to authorize new user using firebase
        const authUser = yield auth.doCreateUserWithEmailAndPassword(action.email, action.passwordOne)
        // Then put them into the Realtime db we have access to
        yield db.doCreateUser(authUser.user.uid, action.username, action.email)
        yield put(emailSignUpSuccess(authUser))
    } catch (err) {
        console.log('Error signing up and/or storing user with Email', err)
        yield put(emailSignUpFailure(err))
    }
}

function* emailLogin(action) {
    console.log('sagas: emailLogin: Attempting to login via email:', action.email)

    try {
        const authUser = yield auth.doSignInWithEmailAndPassword(action.email, action.password)
        yield put(emailLoginSuccess(authUser))
    } catch (err) {
        console.log('Error logging in with Email', err)
        yield put(emailLoginFailure(err))
    }
}

export {
    handleProviderLogin,
    handleEmailLoginAndSignUp
}