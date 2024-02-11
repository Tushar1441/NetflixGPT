import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "netflix-gpt-tushar.firebaseapp.com",
  projectId: "netflix-gpt-tushar",
  storageBucket: "netflix-gpt-tushar.appspot.com",
  messagingSenderId: "1087818299647",
  appId: "1:1087818299647:web:642e8f7a513774d756f4ca",
  measurementId: "G-NS8B1GEGQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
