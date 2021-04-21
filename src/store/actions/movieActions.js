import axios from "axios";
import * as actionTypes from "./actionTypes"
import { addSnackbar, addErrorSnackbar } from "./snackbarActions";

const setMoviesFetchStarted = () => {
    return {
        type: actionTypes.FETCH_DATA_STARTED,
    }
}

const setMoviesFetchSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: movies
    }
}

const setMoviesFetchError = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAILED,
        error: error
    }
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(setMoviesFetchStarted())
        axios
            .post(`${process.env.REACT_APP_API_BASE_PATH}/helloHttp`)
            .then((response) => {
                dispatch(setMoviesFetchSuccess(response.data))
                dispatch(addSnackbar("Successfully fetched the movies"))
            })
            .catch((error) => {
                dispatch(setMoviesFetchError(error))
                dispatch(addErrorSnackbar("Error fetching the movies"))
            })
    }
}
