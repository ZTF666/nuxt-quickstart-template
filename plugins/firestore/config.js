import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp
