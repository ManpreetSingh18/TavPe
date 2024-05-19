// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3wt3Y19x8C7Vx0pFoaSRL33K0Qvo5deE",
  authDomain: "laon-6e18e.firebaseapp.com",
  projectId: "laon-6e18e",
  storageBucket: "laon-6e18e.appspot.com",
  messagingSenderId: "1077250949069",
  appId: "1:1077250949069:web:fb5812f57b60fd05810e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);