import * as actionTypes from "./actionTypes"
import movieApiService from "../../services/firebase/api/movie";

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
                dispatch(setMoviesFetchSuccess(response.data.results))
            })
            .catch((error) => {
                dispatch(setMoviesFetchError(error))
            })
    }
}
