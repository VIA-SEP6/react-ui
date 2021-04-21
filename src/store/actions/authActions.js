import * as actionsTypes from "./actionsTypes";
import {loginUserAccount, logoutUserAccount} from '../../services/firebase/auth'
import firebaseFunctions from "../../services/firebase/functions";


const setAuthStarted = () => {
    return {
        type: actionsTypes.AUTH_START,
    }
}

const setAuthSuccess = (response) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        payload: response
    }
}

const setAuthFail = (error) => {
    return {
        type: actionsTypes.AUTH_FAILED,
        error: error
    }
}

const setAuthLogOut = () => {
    return {
        type: actionsTypes.AUTH_LOGOUT,
    }
}


export const registerUser = (newUserObject) => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        firebaseFunctions.registerUserAccount(newUserObject)
            .then(response => {
                dispatch(loginUser(newUserObject.email, newUserObject.password))
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
            })
            .catch(error => {
                dispatch(setAuthFail(error))
            })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        logoutUserAccount()
            .then(() => {
                dispatch(setAuthLogOut())
            })
            .catch(error => {
                dispatch(setAuthFail(error))
            })
    }
}
