// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7B6c3-23EMylDGjhCDOYr23AUV2wE2V0",
    authDomain: "clone-77572.firebaseapp.com",
    projectId: "clone-77572",
    storageBucket: "clone-77572.appspot.com",
    messagingSenderId: "651604172327",
    appId: "1:651604172327:web:fb79c0da97587c09797802",
    measurementId: "G-GCRWY6N7C3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
