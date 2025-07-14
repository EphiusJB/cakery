// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore
  } from "firebase/firestore";
  import {
    getAuth
  } from "firebase/auth";
  import {
    getStorage
  } from "firebase/storage";
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYuQ2s06tyxecTCpG_sDglm3eDPsYl92I",
  authDomain: "mikas-77fe7.firebaseapp.com",
  projectId: "mikas-77fe7",
  storageBucket: "mikas-77fe7.firebasestorage.app",
  messagingSenderId: "155048517528",
  appId: "1:155048517528:web:4003b2b18a0c4d316455ed",
  measurementId: "G-VLWL63M7HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);