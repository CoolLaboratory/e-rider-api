import firebase from 'firebase/app'
import 'firebase/messaging'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'


const firebaseConfig = Object.freeze({
  apiKey: "AIzaSyBAjOivxDBQhJNvZKyse9tKNorzKc_IOeY",
  authDomain: "e-rider-app.firebaseapp.com",
  projectId: "e-rider-app",
  storageBucket: "e-rider-app.appspot.com",
  messagingSenderId: "551709811615",
  appId: "1:551709811615:web:15655a4c93a4cbee2253aa",
  measurementId: "G-DCB4GD94K9"
});

firebase.initializeApp(firebaseConfig)

export default firebase