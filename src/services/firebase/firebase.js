import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';

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

