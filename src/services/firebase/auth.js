import firebase from 'firebase/app'
import {auth} from "./firebase";

export const loginUserAccount = (email, password) => auth.signInWithEmailAndPassword(email, password)

export const logoutUserAccount = () => auth.signOut()

export const loginUserWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return auth
        .signInWithPopup(provider)
        .then((result) => {
            return result.user;
        })
}