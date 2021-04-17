import * as actionsTypes from "./actionsTypes";
import {loginUserAccount, registerUserAccount, logoutUserAccount} from '../../services/firebase/auth'


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
            })
            .catch(error => {
                dispatch(setAuthFail(error))
            })
    }
}

export const logoutUser = (email, password) => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        logoutUserAccount(email, password)
            .then(() => {
                dispatch(setAuthLogOut())
            })
            .catch(error => {
                dispatch(setAuthFail(error))
            })
    }
}
