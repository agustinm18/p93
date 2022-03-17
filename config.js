import firebase from 'firebase'
require("@firebase/firestore")

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD9JMTXAk1qjuYhZW2ns2tJdab8Mlkic-w",
    authDomain: "theultreadingapp.firebaseapp.com",
    projectId: "theultreadingapp",
    storageBucket: "theultreadingapp.appspot.com",
    messagingSenderId: "309213625272",
    appId: "1:309213625272:web:f2dd80c9f044dd6e506d4d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()                                   