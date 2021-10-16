import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABf2nqr4Bj1zgPDV0ycOOCk1ic0UdajEo",
  authDomain: "chatapp-f4fb4.firebaseapp.com",
  projectId: "chatapp-f4fb4",
  storageBucket: "chatapp-f4fb4.appspot.com",
  messagingSenderId: "507638637174",
  appId: "1:507638637174:web:6c90709c9d79d98e083557",
  measurementId: "G-5SMHC0ZDC2"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }