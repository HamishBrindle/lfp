import {
    auth,
    providers
} from './firebase'

// Sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

// Sign In (Github)
export const doSignInWithGithub = () =>
    auth.signInWithPopup(providers.github)

// Sign out
export const doSignOut = () =>
    auth.signOut()

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email)

// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password)