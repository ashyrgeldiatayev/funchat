import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcqBh3E8ksUdhpb8mYyRbfcCUo3D8SnfY",
  authDomain: "funchat-fbaae.firebaseapp.com",
  projectId: "funchat-fbaae",
  storageBucket: "funchat-fbaae.appspot.com",
  messagingSenderId: "984288458298",
  appId: "1:984288458298:web:f7aeae0ba378714a882703"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()