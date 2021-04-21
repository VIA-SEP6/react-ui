import * as actionTypes from "./actionTypes";
import {loginUserAccount, registerUserAccount, logoutUserAccount} from '../../services/firebase/auth'
import { addSnackbar, addErrorSnackbar} from '../actions/index'


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


export const registerUser = (email, password) => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        registerUserAccount(email, password)
            .then(response => {
                dispatch(setAuthSuccess(response))
            })
            .catch(error => {
                dispatch(setAuthFail(error))
            })
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        loginUserAccount(email, password)
            .then(response => {
                dispatch(setAuthSuccess(response))
                dispatch(addSnackbar("Successfully logged In"))
            })
            .catch(error => {
                dispatch(setAuthFail(error))
                switch (error.code){
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
                dispatch(addSnackbar("Succesfully logged Out"))
            })
            .catch(error => {
                dispatch(setAuthFail(error))
                dispatch(addErrorSnackbar("Error logging Out"))
            })
    }
}
