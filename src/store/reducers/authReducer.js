import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    user: null,
    loading: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.AUTH_START:
            return {...state, loading: true};
        case actionsTypes.AUTH_SUCCESS:
            return {...state, loading: false, user: action.payload};
        case actionsTypes.AUTH_FAILED:
            return {...state, loading: false, error: action.error}
        default:
            return state;
    }
}

export default authReducer;