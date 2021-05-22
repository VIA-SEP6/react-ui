import * as actionTypes from '../actions/actionTypes'

const initialState = {
    profile: {},
    loading: false,
    error: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PROFILE_STARTED:
            return {...state, loading: true}
        case actionTypes.LOAD_PROFILE_SUCCESS:
            return {...state, loading: false, profile: action.payload}
        case actionTypes.LOAD_PROFILE_FAILED:
            return {...state, loading: false, error: action.error}
        default:
            return state;
    }
}

export default profileReducer;