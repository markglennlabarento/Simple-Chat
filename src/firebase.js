import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC71nOMbPsln-L36w32mD8i0HksiyMH4Bc",
  authDomain: "simple-chat-22113.firebaseapp.com",
  projectId: "simple-chat-22113",
  storageBucket: "simple-chat-22113.appspot.com",
  messagingSenderId: "198004962904",
  appId: "1:198004962904:web:5a76da63d37733fe61bc2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()