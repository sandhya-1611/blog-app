// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a7d51.firebaseapp.com",
  projectId: "mern-blog-a7d51",
  storageBucket: "mern-blog-a7d51.appspot.com",
  messagingSenderId: "626333140479",
  appId: "1:626333140479:web:75e9190f68bbb0c3c713ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);