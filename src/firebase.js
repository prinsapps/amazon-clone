import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBfYSLk1qM-cHhZswW8f_LXIY9dREWm8fQ",
    authDomain: "clone-9f3d6.firebaseapp.com",
    databaseURL: "https://clone-9f3d6.firebaseio.com",
    projectId: "clone-9f3d6",
    storageBucket: "clone-9f3d6.appspot.com",
    messagingSenderId: "441908153018",
    appId: "1:441908153018:web:1c3ca33b4e3f76c6bf9083"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};