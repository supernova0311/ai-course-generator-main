// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "ai-course-524e9.firebaseapp.com",
  projectId: "ai-course-524e9",
  storageBucket: "ai-course-524e9.firebasestorage.app",
  messagingSenderId: "450668452514",
  appId: "1:450668452514:web:9d15f070d63218872c15fb",
  measurementId: "G-QYH7LCSXF8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);

export { db };
