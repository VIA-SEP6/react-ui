import {firebaseOnCall} from "../firebase";

const registerUserAccount = (newUserObject) => {
    const registerUserRequest = {
        userName: newUserObject.username,
        password: newUserObject.password,
        email: newUserObject.email,
        userInfo: {
            age: newUserObject.age,
            country: newUserObject.country,
            phone: newUserObject.phone
        }
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

const uploadedImage = () => {
    return firebaseOnCall('user-getProfile')
}

const updatePassword = () => {
    return firebaseOnCall('user-getProfile')
}

const updateInfo = () => {
    return firebaseOnCall('user-getProfile')
}

const authApiService = {
    registerUserAccount,
    getUserProfile,
    addMovieToFavourites,
    removeMovieFromFavourites,
}

export default authApiService;