// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: JSON.stringify(import.meta.env.REACT_APP_API_KEY),
  // authDomain: JSON.stringify(import.meta.env.REACT_APP_AUTH_DOMAIN),
  // projectId: JSON.stringify(import.meta.env.REACT_APP_PROJECT_ID),
  // storageBucket: JSON.stringify(import.meta.env.REACT_APP_STORAGE_BUCKET),
  // messagingSenderId: JSON.stringify(import.meta.env.REACT_APP_MESSAGING_SENDER_ID),
  // appId: JSON.stringify(import.meta.env.REACT_APP_APP_ID),
  // measurementId: JSON.stringify(import.meta.env.REACT_APP_MEASUREMENT_ID),

  apiKey: "AIzaSyDF6-P3RxrqVDowFWp16rpUqHGu0IAj-8I",
  authDomain: "sticky-wall-1ea02.firebaseapp.com",
  projectId: "sticky-wall-1ea02",
  storageBucket: "sticky-wall-1ea02.appspot.com",
  messagingSenderId: "720845172225",
  appId: "1:720845172225:web:e9f99c2ed866486bb59a00",
  measurementId: "G-8BQXHKH0J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth ,firestore,}