import * as actionTypes from '../actions/actionTypes'

const initialState = {
    movies: null,
    loading: false,
    error: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_STARTED:
            return {...state, loading: true, error: null}
        case actionTypes.FETCH_DATA_SUCCESS:
            return {...state, movies: action.payload, loading: false}
        case actionTypes.FETCH_DATA_FAILED:
            return {...state, error: action.error, loading: false}
        default:
            return state
    }
}

export default movieReducer;