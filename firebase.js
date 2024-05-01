// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqSIxLGl7yI_pubHx8Hu08zRIxfBq96Ts",
  authDomain: "blog-app-b142e.firebaseapp.com",
  projectId: "blog-app-b142e",
  storageBucket: "blog-app-b142e.appspot.com",
  messagingSenderId: "589045869225",
  appId: "1:589045869225:web:f31aec501686313baf97b8",
  measurementId: "G-VTJYPC0TBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);