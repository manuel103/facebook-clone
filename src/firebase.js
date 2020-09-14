
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9VK7vrqPkbKzyBULUZpdyg17iC2AEAn0",
    authDomain: "facebook-clone-92ec7.firebaseapp.com",
    databaseURL: "https://facebook-clone-92ec7.firebaseio.com",
    projectId: "facebook-clone-92ec7",
    storageBucket: "facebook-clone-92ec7.appspot.com",
    messagingSenderId: "29957162487",
    appId: "1:29957162487:web:d23c77dc707e38639e1af2",
    measurementId: "G-Y8K5YRR2MN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;