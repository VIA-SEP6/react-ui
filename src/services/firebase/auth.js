import {auth} from "./firebase";

export const loginUserAccount = (email, password) => auth.signInWithEmailAndPassword(email, password)

export const registerUserAccount = (email, password) => auth.createUserWithEmailAndPassword(email, password)

export const logoutUserAccount = () => auth.signOut()