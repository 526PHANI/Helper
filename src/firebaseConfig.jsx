// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCrDkAD3I1c6HyNEcpAe9WFZCzwb9wsw8I",
    authDomain: "interview-3c7a4.firebaseapp.com",
    projectId: "interview-3c7a4",
    storageBucket: "interview-3c7a4.firebasestorage.app",
    messagingSenderId: "438737340158",
    appId: "1:438737340158:web:fc73de3740cb74a6a147af",
    measurementId: "G-CT1RGSKRD9"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { db, auth, provider , storage};






