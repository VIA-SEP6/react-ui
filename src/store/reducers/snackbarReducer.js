import * as actionTypes from '../actions/actionTypes'

const initialState = {
    snackbarOpen: false,
    snackbarType: "success",
    snackbarMessage: ""
}

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_SNACKBAR:
        case actionTypes.ADD_INFO_SNACKBAR:
        case actionTypes.ADD_WARNING_SNACKBAR:
        case actionTypes.ADD_ERROR_SNACKBAR:
            return { ...state, snackbarOpen: true, snackbarType: action.snackbarType, snackbarMessage: action.snackbarMessage }
        case actionTypes.REMOVE_SNACKBAR:
            return { ...state, snackbarOpen: false }

        default:
            return state
    }
}

export default snackbarReducer;