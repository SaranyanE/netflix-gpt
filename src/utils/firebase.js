// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDV0V-MBSyYplmuUkpSVYLy9JHS32q-TA",
  authDomain: "netflix-gpt-5b5e2.firebaseapp.com",
  projectId: "netflix-gpt-5b5e2",
  storageBucket: "netflix-gpt-5b5e2.firebasestorage.app",
  messagingSenderId: "190153059472",
  appId: "1:190153059472:web:bd179d18a751bf215bbc15",
  measurementId: "G-TX23RCC91C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
