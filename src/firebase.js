// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app" //used in Initialize firebase configuration with react app...

// Sesitive information ...
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
    databaseURL: `${process.env.REACT_APP_DATABASE_URL}`
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);