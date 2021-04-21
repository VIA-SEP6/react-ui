import * as actionTypes from "./actionTypes";

export const addSnackbar = (snackbarMessage) => ({
    type: actionTypes.ADD_SNACKBAR,
    snackbarType : "success",
    snackbarMessage
});

export const addInfoSnackbar = (snackbarMessage) => ({
    type: actionTypes.ADD_INFO_SNACKBAR,
    snackbarType : "info",
    snackbarMessage
});

export const addWarningSnackbar = (snackbarMessage) => ({
    type: actionTypes.ADD_WARNING_SNACKBAR,
    snackbarType : "warning",
    snackbarMessage
});

export const addErrorSnackbar = (snackbarMessage) => ({
    type: actionTypes.ADD_ERROR_SNACKBAR,
    snackbarType : "error",
    snackbarMessage
});

export const removeSnackbar = () => ({ type: actionTypes.REMOVE_SNACKBAR });
