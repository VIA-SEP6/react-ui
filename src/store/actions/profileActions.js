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

export const fetchProfile = (uuid) => {
    return (dispatch) => {
        dispatch(setProfileFetchStarted())
        authApiService.getUserProfile(uuid)
            .then((response) => {
                dispatch(setProfileFetchSuccess(response.result.message))
            })
            .catch((error) => {
                dispatch(setProfileFetchError(error))
            })
    }
}