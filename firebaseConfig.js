// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKnfO3XbaLEDWhDF-UI5Z_b02ejea1VGE",
  authDomain: "mentorbridge-a020d.firebaseapp.com",
  projectId: "mentorbridge-a020d",
  storageBucket: "mentorbridge-a020d.firebasestorage.app",
  messagingSenderId: "87694941718",
  appId: "1:87694941718:web:a5d96926fe3194ff5e5f37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

