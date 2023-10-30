// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app/app";      //compat for lates firebase version 9+ or whatever
// import * as firebase from "firebase";
import "firebase/databse";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiTyMZaTXmB6A8GfFXyNA_4K8cp-6sU_g",
  authDomain: "restaurant-app-dd8a9.firebaseapp.com",
  projectId: "restaurant-app-dd8a9",
  storageBucket: "restaurant-app-dd8a9.appspot.com",
  messagingSenderId: "901020232550",
  appId: "1:901020232550:web:62fbb94aedd343645bf6a7"
};

//Initialize Firebase

const app = initializeApp(firebaseConfig);
// export file
export default app;