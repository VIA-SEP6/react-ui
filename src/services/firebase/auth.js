import {auth} from "./firebase";

export const createAccount = (email, password) => auth.createUserWithEmailAndPassword(email, password)

export const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

export const logout = () => auth.signOut()