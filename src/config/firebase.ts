// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmnj2KAwjADtLWqO1Rr_IbWvhvmwCQHJ4",
  authDomain: "react-blog-01022002.firebaseapp.com",
  projectId: "react-blog-01022002",
  storageBucket: "react-blog-01022002.firebasestorage.appspot.com",
  messagingSenderId: "870857838497",
  appId: "1:870857838497:web:1deefe522f4dcbf05705e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app) ;
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)