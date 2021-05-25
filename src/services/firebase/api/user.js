import {firebaseOnCall} from "../firebase";
import storageReferenceService from "../storage/references";

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

const uploadUserProfileImage = (userId, file) => {
    const storageRef = storageReferenceService.getProfileImageReferenceForUser(userId)
    const resizedStorageRef = storageReferenceService.getProfileImageResizedReferenceForUser(userId)
    return resizedStorageRef.delete().catch(e => {}).finally(() => storageRef.put(file))
}

const updateInfo = (infoObject) => {
    return firebaseOnCall('user-updateProfile', (infoObject))
}

const userApiService = {
    registerUserAccount,
    getUserProfile,
    addMovieToFavourites,
    removeMovieFromFavourites,
    updateInfo,
    uploadUserProfileImage
}

export default userApiService;