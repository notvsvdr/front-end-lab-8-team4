import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAgb8UXMbwTuMtB0PLcnl1r_pYq3lIs9E0",
    authDomain: "fel8-4d3d1.firebaseapp.com",
    databaseURL: "https://fel8-4d3d1.firebaseio.com",
    projectId: "fel8-4d3d1",
    storageBucket: "fel8-4d3d1.appspot.com",
    messagingSenderId: "595191190122"
};

firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
