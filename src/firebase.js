import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAltR2gyRBkILBgMEQVa3QT6LI9bUjxUCU",
    authDomain: "react-social-network-4762c.firebaseapp.com",
    databaseURL: "https://react-social-network-4762c-default-rtdb.firebaseio.com",
    projectId: "react-social-network-4762c",
    storageBucket: "react-social-network-4762c.appspot.com",
    messagingSenderId: "604842802759",
    appId: "1:604842802759:web:de11221667256e472bbb62"
};

let firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB;