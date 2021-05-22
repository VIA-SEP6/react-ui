import * as actionTypes from "./actionTypes";
import authApiService from "../../services/firebase/api/user";

const setProfileFetchStarted = () => {
    return {
        type: actionTypes.LOAD_PROFILE_STARTED,
    }
}

const setProfileFetchSuccess = (profileData) => {
    return {
        type: actionTypes.LOAD_PROFILE_SUCCESS,
        payload: profileData
    }
}

const setProfileFetchError = (error) => {
    return {
        type: actionTypes.LOAD_PROFILE_FAILED,
        error: error
    }
}

export const fetchProfile = () => {
    return (dispatch) => {
        dispatch(setProfileFetchStarted())
        authApiService.getUserProfile()
            .then((response) => {
                dispatch(setProfileFetchSuccess(response))
            })
            .catch((error) => {
                dispatch(setProfileFetchError(error))
            })
    }
}