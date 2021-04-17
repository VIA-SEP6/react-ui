import * as actionsTypes from "./actionsTypes";
import {login, createAccount} from '../../services/firebase/auth'


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


export const createUserAccount = (email, password) => {
    return (dispatch) => {
        dispatch(setAuthStarted())
        createAccount(email, password)
            .then(response => {
                dispatch(setAuthSuccess(response))
            })
            .catch(error => {
                dispatch(setAuthFail(error))
            })
    }
}
