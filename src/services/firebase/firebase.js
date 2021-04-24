import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAJ0f2lWAEXNGgvKRwXPxrDdWZi_eSjR7E",
    projectId: "sep6-310611",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();

export const db = firebase.database();

