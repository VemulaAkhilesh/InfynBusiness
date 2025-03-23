// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQCXpaMJ2tBV63Wfcyuhbk1xzDpJx97_E",
  authDomain: "infynbusiness-66247.firebaseapp.com",
  projectId: "infynbusiness-66247",
  storageBucket: "infynbusiness-66247.appspot.com",
  messagingSenderId: "786451478005",
  appId: "1:786451478005:web:3853fcd9cd7e72383adcbc",
  measurementId: "G-JK15N6GN3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)