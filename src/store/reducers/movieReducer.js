import * as actionTypes from '../actions/actionTypes'

const initialState = {
    movies: [],
    loading: false,
    error: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_MOVIE_STARTED:
            return {...state, loading: true, error: null}
        case actionTypes.SEARCH_MOVIE_SUCCESS:
            return {...state, movies: action.payload, loading: false}
        case actionTypes.SEARCH_MOVIE_FAILED:
            return {...state, error: action.error, loading: false}
        case actionTypes.SEARCH_MOVIE_RESET:
            return {...state, movies: [], error: null, loading: false}
        default:
            return state
    }
}

export default movieReducer;