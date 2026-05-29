// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAno2qsi9BNL6F9AKPPBDsbXF1l5R19g70",
  authDomain: "assignment-d2da4.firebaseapp.com",
  projectId: "assignment-d2da4",
  storageBucket: "assignment-d2da4.firebasestorage.app",
  messagingSenderId: "441597568146",
  appId: "1:441597568146:web:160a558163c223ce26724b",
  measurementId: "G-SG4J0TJ2EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const store = getFirestore(app)
export { auth,store}