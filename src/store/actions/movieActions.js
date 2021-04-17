import axios from "axios";
import * as actionsTypes from "./actionsTypes"

const setMoviesFetchStarted = () => {
    return {
        type: actionsTypes.FETCH_DATA_STARTED,
    }
}

const setMoviesFetchSuccess = (movies) => {
    return {
        type: actionsTypes.FETCH_DATA_SUCCESS,
        payload: movies
    }
}

const setMoviesFetchError = (error) => {
    return {
        type: actionsTypes.FETCH_DATA_FAILED,
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
            })
            .catch((error) => {
                dispatch(setMoviesFetchError(error))
            })
    }
}
