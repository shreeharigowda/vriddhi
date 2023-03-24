import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCju9rao53F53mjOhszI18Q83wZtCza8jM",
  authDomain: "hand-153f0.firebaseapp.com",
  databaseURL: "https://hand-153f0-default-rtdb.firebaseio.com",
  projectId: "hand-153f0",
  storageBucket: "hand-153f0.appspot.com",
  messagingSenderId: "814251805836",
  appId: "1:814251805836:web:c489eaeed2fe5135c17fa9",
  measurementId: "G-DNET5607GB"
};

export const Firebase = firebase.initializeApp(firebaseConfig)//named export