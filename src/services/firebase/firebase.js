import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyAJ0f2lWAEXNGgvKRwXPxrDdWZi_eSjR7E",
    projectId: "sep6-310611",
    authDomain: "sep6-310611.firebaseapp.com"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();

export const db = firebase.database();

export const firestore = firebase.firestore();

let functions;

if (process.env.REACT_APP_LOCAL) {
    functions = firebase.app().functions("europe-west1");
    functions.useEmulator('localhost', 5001)
} else {
    functions = firebase.app().functions("europe-west1")
}


export function firebaseOnCall(functionName, payloadObj) {
    return functions.httpsCallable(functionName)(payloadObj).then(result => result.data)
}

