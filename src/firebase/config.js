// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGt0YAW2ibOpQ4j08P3d4ZjWaEENSUAhM",
  authDomain: "maxirest-tognetti.firebaseapp.com",
  projectId: "maxirest-tognetti",
  storageBucket: "maxirest-tognetti.appspot.com",
  messagingSenderId: "240601591511",
  appId: "1:240601591511:web:3ec9aa5dd479955576ca92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const iniciarFirebase = () => {
    return app
}