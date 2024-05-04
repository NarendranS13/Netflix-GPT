// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB_EBnFx3T5CD6YSr4UpCdKZM1SwqvZHY",
  authDomain: "netflix-gpt-f773e.firebaseapp.com",
  projectId: "netflix-gpt-f773e",
  storageBucket: "netflix-gpt-f773e.appspot.com",
  messagingSenderId: "634877944868",
  appId: "1:634877944868:web:149502239de062995c24b1",
  measurementId: "G-N0PDDTCH8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();