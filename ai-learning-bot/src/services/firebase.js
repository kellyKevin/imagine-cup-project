// src/services/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyD8eTd65RttecKqapWrxcBTOkmzR1WCHRg",
    authDomain: "ai-learning-bot.firebaseapp.com",
    projectId: "ai-learning-bot",
    storageBucket: "ai-learning-bot.appspot.com",
    messagingSenderId: "743014674747",
    appId: "1:743014674747:web:2e5dfc48ee23850d5a071e",
    measurementId: "G-3DX936SVQX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
