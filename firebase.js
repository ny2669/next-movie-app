// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgAllrNJ7UbnCPQLeJEd0B-yA0ak5SQFo",
  authDomain: "netflix-clone-ed08f.firebaseapp.com",
  projectId: "netflix-clone-ed08f",
  storageBucket: "netflix-clone-ed08f.appspot.com",
  messagingSenderId: "255008974464",
  appId: "1:255008974464:web:6e6d1d92d6391f86ace865"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }