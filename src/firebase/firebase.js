import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA8lyVFqd6QU0Z_2AAAcRxNLlFopHhrPr4",
  authDomain: "clone-be99d.firebaseapp.com",
  projectId: "clone-be99d",
  storageBucket: "clone-be99d.appspot.com",
  messagingSenderId: "129200424474",
  appId: "1:129200424474:web:1755ec7ffd15fdfefcf3a3"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig )
const db = getFirestore( app )
const auth = getAuth( app )
const provider = new GoogleAuthProvider()


export const GoogleSingIn = async() => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result

    return { user }
    
  } catch (error) {
    console.log(error)
    
  }

}


export { db, auth, provider }
