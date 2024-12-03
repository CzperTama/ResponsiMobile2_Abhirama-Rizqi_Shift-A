// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAw_kVty7hEuHRFlDXxoEBiJEIqfdbVBk",
  authDomain: "radiator-springs-2ab0f.firebaseapp.com",
  projectId: "radiator-springs-2ab0f",
  storageBucket: "radiator-springs-2ab0f.firebasestorage.app",
  messagingSenderId: "522834164703",
  appId: "1:522834164703:web:cff73dba8250c9bc24226a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };