// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFc9Rk2x5TvZyx28BGxYaLYSlJHrX_-i4",
  authDomain: "socialbird-13872.firebaseapp.com",
  projectId: "socialbird-13872",
  storageBucket: "socialbird-13872.appspot.com",
  messagingSenderId: "437708144684",
  appId: "1:437708144684:web:f9cdb679b48fd0be26d189",
  measurementId: "G-GG7PDMFE5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);