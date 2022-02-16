// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDepq9opwrkqd9lG2SPjxJ6dj9_34lBSvY",
  authDomain: "dimensione-creativa.firebaseapp.com",
  projectId: "dimensione-creativa",
  storageBucket: "dimensione-creativa.appspot.com",
  messagingSenderId: "121966325154",
  appId: "1:121966325154:web:e515a9544120f7b56196fb",
  measurementId: "G-EGLJCTNLST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
