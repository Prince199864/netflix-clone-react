import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjMxiVLjAcrcg4CDvfj3pHLQ6Pr_aAvRQ",
  authDomain: "netflix-clone-1-41015.firebaseapp.com",
  projectId: "netflix-clone-1-41015",
  storageBucket: "netflix-clone-1-41015.appspot.com",
  messagingSenderId: "165584047291",
  appId: "1:165584047291:web:b379c711af7a2ef442ad9e"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
