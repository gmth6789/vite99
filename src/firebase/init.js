import { initializaApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const FirebaseConfig = {
  apiKey: "AIzaSyCoEEMZIfXd0btciKOF7F0AlAStMHGhgCg",
  authDomain: "gmth789-60664.firebaseapp.com",
  projectId: "gmth789-60664",
  storageBucket: "gmth789-60664.appspot.com",
  messagingSenderId: "564023770793",
  appId: "1:564023770793:web:115fb95388e9cc1588b3b8"
}


initializaApp(firebaseConfig)


const db = getFirestore()
export default db