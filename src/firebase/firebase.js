// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhdYwapZ9lh5acvMwKHT4NfYtAq7WlkzI",
  authDomain: "project-contact-ac895.firebaseapp.com",
  projectId: "project-contact-ac895",
  storageBucket: "project-contact-ac895.firebasestorage.app",
  messagingSenderId: "999016346924",
  appId: "1:999016346924:web:9a56756539862157072889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

