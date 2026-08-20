



import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-2291f.firebaseapp.com",
  projectId: "interviewiq-2291f",
  storageBucket: "interviewiq-2291f.firebasestorage.app",
  messagingSenderId: "1003466644180",
  appId: "1:1003466644180:web:68fed5e3f1360f53f1b941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider=new GoogleAuthProvider()

export {auth , provider}

