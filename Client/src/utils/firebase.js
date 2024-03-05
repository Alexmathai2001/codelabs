// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6dXeSr8OFbKSyKSfCNdzGXO_Gr46yjas",
    authDomain: "codelabs-9c109.firebaseapp.com",
    projectId: "codelabs-9c109",
    storageBucket: "codelabs-9c109.appspot.com",
    messagingSenderId: "625623603495",
    appId: "1:625623603495:web:09e0100bcaf7a16285f102",
    measurementId: "G-BE74MSWS3Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();