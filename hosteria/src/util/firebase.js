import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD2bLJKaDqgFt-Wj6ZNN-P9zsCUjYBDChM",
    authDomain: "hosteria-43ead.firebaseapp.com",
    databaseURL: "https://hosteria-43ead-default-rtdb.firebaseio.com",
    projectId: "hosteria-43ead",
    storageBucket: "hosteria-43ead.appspot.com",
    messagingSenderId: "917137507230",
    appId: "1:917137507230:web:8c5d1400ef8aaea6390c8f",
    measurementId: "G-1QN7RFRSXH"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

//var fireDB=firebase.initializeApp(firebaseConfig);