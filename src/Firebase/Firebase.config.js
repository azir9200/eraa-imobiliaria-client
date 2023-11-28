// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId

  apiKey: "AIzaSyAYJVj3rMiXSGsSwCPPpFnayTuXDbdMins",
  authDomain: "eraa-imobiliaria.firebaseapp.com",
  projectId: "eraa-imobiliaria",
  storageBucket: "eraa-imobiliaria.appspot.com",
  messagingSenderId: "345324357970",
  appId: "1:345324357970:web:289742c1502b270c73528b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);