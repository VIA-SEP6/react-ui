import * as actionsTypes from "./actionsTypes";

export const setSnackbar = (
    snackbarOpen,
    snackbarType = "success",
    snackbarMessage = ""
) => ({
    type: actionsTypes.SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage
});
