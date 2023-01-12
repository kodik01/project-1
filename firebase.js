// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "@firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2GmpT_ZQnk3IkUd5DUY2jxnoTovAAB-M",
  authDomain: "cool-wallpaper-d2a6c.firebaseapp.com",
  projectId: "cool-wallpaper-d2a6c",
  storageBucket: "cool-wallpaper-d2a6c.appspot.com",
  messagingSenderId: "641339931165",
  appId: "1:641339931165:web:8aea2028f17675689de4f4",
  measurementId: "G-ET8L6EHH6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export {db,auth}