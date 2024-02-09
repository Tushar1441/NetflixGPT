import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYkqau9Lj6ewoIVK6p30wFVJ-l8khf70Q",
  authDomain: "netflix-gpt-ffa58.firebaseapp.com",
  projectId: "netflix-gpt-ffa58",
  storageBucket: "netflix-gpt-ffa58.appspot.com",
  messagingSenderId: "516872593010",
  appId: "1:516872593010:web:f65e3cd823bc5d4bea2ceb",
  measurementId: "G-4EY3DN4LKK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
