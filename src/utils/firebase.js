import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6_XCVDXIDn1wz8jX6S4bJ_K67srhqQVk",
  authDomain: "netflixgpt-by-tushar.firebaseapp.com",
  projectId: "netflixgpt-by-tushar",
  storageBucket: "netflixgpt-by-tushar.appspot.com",
  messagingSenderId: "660620883695",
  appId: "1:660620883695:web:1fd0307c81173f1cd68d1a",
  measurementId: "G-YWDFJCV4YV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
