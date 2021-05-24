import * as actionTypes from "./actionTypes"
import movieApiService from "../../services/firebase/api/movie";
import {addErrorSnackbar, addSnackbar} from "./snackbarActions";

const setMoviesFetchStarted = () => {
    return {
        type: actionTypes.SEARCH_MOVIE_STARTED,
    }
}

const setMoviesFetchSuccess = (movies) => {
    return {
        type: actionTypes.SEARCH_MOVIE_SUCCESS,
        payload: movies
    }
}

const setMoviesFetchError = (error) => {
    return {
        type: actionTypes.SEARCH_MOVIE_FAILED,
        error: error
    }
}

export const clearMovies = () => {
    return {
        type: actionTypes.SEARCH_MOVIE_RESET,
    }
}

export const searchMovie = (name) => {
    return (dispatch) => {
        dispatch(setMoviesFetchStarted())
        movieApiService.searchMovie(name)
            .then((response) => {
                dispatch(setMoviesFetchSuccess(response.results))
            })
            .catch((error) => {
                dispatch(setMoviesFetchError(error))
            })
    }
}

export const addReview = (userId, description, rating, movieId) => {
    return (dispatch) => {
        movieApiService.addReview(userId, description, rating, movieId)
            .then(() => {
                dispatch(addSnackbar("Review successfully added"))
            })
            .catch((error) => {
                console.log(error)
                dispatch(addErrorSnackbar("Error Submitting review"))
            })
    }
}

export const addComment = (movieId, comment, parent) => {
    return (dispatch) => {
        movieApiService.addComment(movieId, comment, parent)
            .then(() => {
                dispatch(addSnackbar("Comment successfully added"))
            })
            .catch((error) => {
                console.log(error)
                dispatch(addErrorSnackbar("Error creating comment"))
            })
    }
}
