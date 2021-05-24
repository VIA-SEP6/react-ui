import * as actionTypes from "./actionTypes";
import authApiService from "../../services/firebase/api/user";
import {addErrorSnackbar, addSnackbar} from "./snackbarActions";

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

export const uploadImage = (userId, uploadedImage) => {
    return (dispatch) => {
        authApiService.uploadUserProfileImage(userId, uploadedImage)
            .then(() => {
                dispatch(addSnackbar("Avatar successfully updated"))
            })
            .catch(() => {
                dispatch(addErrorSnackbar("Error updating avatar"))
            })
    }
}

export const updateInfo = (infoObject) => {
    return (dispatch) => {
        authApiService.updateInfo(infoObject)
            .then(() => {
                dispatch(addSnackbar("Personal information successfully updated"))
            })
            .catch(() => {
                dispatch(addErrorSnackbar("Error updating personal information"))
            })
    }
}