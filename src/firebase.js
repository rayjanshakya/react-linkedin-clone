import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCj9q6nqs2-PJdgicmEQE06LI-KsZM4dMk",
    authDomain: "react-linkedin-clone-1c833.firebaseapp.com",
    projectId: "react-linkedin-clone-1c833",
    storageBucket: "react-linkedin-clone-1c833.appspot.com",
    messagingSenderId: "366017421310",
    appId: "1:366017421310:web:17d8363898e2c7806ceaaf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };