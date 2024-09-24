// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

///////////////// use this firebase key ////////////

// VITE_apiKey=AIzaSyDD8Gvptzyjtmmew3zeUm0HSPk0oqkjHas
// VITE_authDomain=tech-heim-6aad2.firebaseapp.com
// VITE_projectId=tech-heim-6aad2
// VITE_storageBucket=tech-heim-6aad2.appspot.com
// VITE_messagingSenderId=858150678851
// VITE_appId=1:858150678851:web:fd5d1842588b912a0b3ff6

///////////////// use this firebase key ////////////

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
