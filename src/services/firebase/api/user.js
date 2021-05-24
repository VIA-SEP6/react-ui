import {firebaseOnCall} from "../firebase";

const registerUserAccount = (newUserObject) => {
    const registerUserRequest = {
        userName: newUserObject.username,
        password: newUserObject.password,
        email: newUserObject.email,
    }
    return firebaseOnCall('user-register', {...registerUserRequest})
}

const getUserProfile = () => {
    return firebaseOnCall('user-getProfile')
}

const addMovieToFavourites = (movieId) => {
    return firebaseOnCall('user-addFavouriteMovie', {movieId})
}

const removeMovieFromFavourites = (movieId) => {
    return firebaseOnCall('user-removeFavouriteMovie', {movieId})
}

const uploadImage = () => {
    return firebaseOnCall('user-getProfile')
}

const updateInfo = (infoObject) => {
    return firebaseOnCall('user-updateProfile', (infoObject))
}

const authApiService = {
    registerUserAccount,
    getUserProfile,
    addMovieToFavourites,
    removeMovieFromFavourites,
    updateInfo,
    uploadImage,
}

export default authApiService;