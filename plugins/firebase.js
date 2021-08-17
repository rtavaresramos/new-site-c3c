
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj2lfMdOAzbLe_ZeyOww2bN36KME81qaU",
  authDomain: "site-c3c.firebaseapp.com",
  databaseURL: "https://site-c3c-default-rtdb.firebaseio.com",
  projectId: "site-c3c",
  storageBucket: "site-c3c.appspot.com",
  messagingSenderId: "467327593880",
  appId: "1:467327593880:web:8ee969e236f503f7ad4fed",
  measurementId: "G-MWW9PBFMW3"
};
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}
export default firebase
