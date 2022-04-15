// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVJJn8ETwK9z9Kjifl2rOOkRQEgAmGAhI",
  authDomain: "red-onion-c95dc.firebaseapp.com",
  projectId: "red-onion-c95dc",
  storageBucket: "red-onion-c95dc.appspot.com",
  messagingSenderId: "958708762418",
  appId: "1:958708762418:web:def01519114cf8c8ebf92b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;