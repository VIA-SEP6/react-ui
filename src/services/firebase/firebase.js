import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAJ0f2lWAEXNGgvKRwXPxrDdWZi_eSjR7E",
    projectId: "sep6-310611",
    authDomain: "sep6-310611.firebaseapp.com",
    storageBucket: "sep6-310611.appspot.com",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth()

const db = firebase.database();

const firestore = firebase.firestore();

const storage = firebase.storage();

const functions = firebase.app().functions("europe-west1")

if (process.env.REACT_APP_LOCAL) {
    auth.useEmulator('http://localhost:9099')
    db.useEmulator('localhost', 9000)
    firestore.useEmulator('localhost', 8080)
    functions.useEmulator('localhost', 5001)
}

function firebaseOnCall(functionName, payloadObj = {}) {
    return functions.httpsCallable(functionName)(payloadObj)
        .then(result => result.data)
        .catch(err => console.log(err))
}

export {auth, db, firestore, storage, firebaseOnCall}



