import firebase from 'firebase/app'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDNWJjkIHf6dpsgQcsQht7W19H7XfAzo9U",
    authDomain: "reactchat-84606.firebaseapp.com",
    projectId: "reactchat-84606",
    storageBucket: "reactchat-84606.appspot.com",
    messagingSenderId: "362932360638",
    appId: "1:362932360638:web:6ae0ff25838703e01f55ef"
})

export const auth = firebase.auth()