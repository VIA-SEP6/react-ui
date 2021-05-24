import * as actionTypes from "./actionTypes";
import {loginUserAccount, loginUserWithGoogle, logoutUserAccount, updateUserPassword} from '../../services/firebase/auth'
import {addErrorSnackbar, addSnackbar} from '../actions/index'
import authApiService from "../../services/firebase/api/user";
import {auth} from "../../services/firebase/firebase";

const setAuthStarted = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

const setAuthSuccess = (response) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: response
    }
}

const setAuthFail = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
}

const setAuthLogOut = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}


export const registerUser = (newUserObject) => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        authApiService.registerUserAccount(newUserObject)
            .then(response => {
                dispatch(loginUser(newUserObject.email, newUserObject.password))
            })
            .catch(error => {
                dispatch(setAuthFail(error))
                dispatch(addErrorSnackbar("Error creating account " + error.message))
            })
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        loginUserAccount(email, password)
            .then(response => {
                dispatch(setAuthSuccess(response.user))
                dispatch(addSnackbar("Successfully logged In"))
            })
            .catch(error => {
                dispatch(setAuthFail(error))
                switch (error.code) {
                    case "auth/wrong-password":
                        dispatch(addErrorSnackbar("Invalid password"))
                        break;
                    case "auth/invalid-email":
                        dispatch(addErrorSnackbar("Invalid E-mail"))
                        break;
                    default:
                        dispatch(addErrorSnackbar("Error logging In"))
                }
            })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        logoutUserAccount()
            .then(() => {
                dispatch(setAuthLogOut())
                dispatch(addSnackbar("Successfully logged Out"))
            })
            .catch(error => {
                dispatch(setAuthFail(error))
                dispatch(addErrorSnackbar("Error logging Out"))
            })
    }
}

export const logInWithGoogle = () => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        loginUserWithGoogle()
            .then((user) => {
                dispatch(setAuthSuccess(user))
                dispatch(addSnackbar("Successfully logged In"))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const verifyAuth = () => {
    return function (dispatch) {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(setAuthSuccess(user))
            } else {
                dispatch(setAuthLogOut());
            }
        });
    }
}

export const updatePassword = (passwordObject) => {
    return (dispatch) => {
        updateUserPassword(passwordObject)
            .then(() => {
                dispatch(addSnackbar("Password successfully updated"))
            })
            .catch(() => {
                dispatch(addErrorSnackbar("Error updating password"))
            })
    }
}
