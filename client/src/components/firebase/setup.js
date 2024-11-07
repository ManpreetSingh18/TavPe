// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPEiRxQJoDkU3vn4bYhb5aGqO6L-7tOXI",
    authDomain: "loan-8b9e8.firebaseapp.com",
    projectId: "loan-8b9e8",
    storageBucket: "loan-8b9e8.firebasestorage.app",
    messagingSenderId: "883970620531",
    appId: "1:883970620531:web:e4720e5e0488c78d47be06",
    measurementId: "G-XCW9FVNG6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);