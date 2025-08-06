// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnxCfLgBiEIqcS7kqbqJcNe6WqOuKdy2k",
  authDomain: "dragon-news-2-bbd7a.firebaseapp.com",
  projectId: "dragon-news-2-bbd7a",
  storageBucket: "dragon-news-2-bbd7a.firebasestorage.app",
  messagingSenderId: "123302798256",
  appId: "1:123302798256:web:0d80cc5817650b463eac75",
  measurementId: "G-HMLMZT2804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}