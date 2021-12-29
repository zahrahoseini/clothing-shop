import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCRmohqwarHeVWirbpXtKnysqqHmnoJ7lI",
    authDomain: "crwn-db-c9b46.firebaseapp.com",
    projectId: "crwn-db-c9b46",
    storageBucket: "crwn-db-c9b46.appspot.com",
    messagingSenderId: "484554560989",
    appId: "1:484554560989:web:bda8a3b4626712d60a1234",
    measurementId: "G-W508TYLLYR"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;