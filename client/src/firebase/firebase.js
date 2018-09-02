import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDO5eQiUOwTXZlXbT8g_M2TIyT25HScxGw",
    authDomain: "looking-for-project.firebaseapp.com",
    databaseURL: "https://looking-for-project.firebaseio.com",
    projectId: "looking-for-project",
    storageBucket: "looking-for-project.appspot.com",
    messagingSenderId: "366076596325"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()
const providers = {
    github: new firebase.auth.GithubAuthProvider()
}

export {
    db,
    auth,
    providers
}