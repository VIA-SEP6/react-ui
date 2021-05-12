import instance from "./axios";

const registerUserAccount = (axios) => (newUserObject) => {
    const data = {
        userName: newUserObject.username,
        password: newUserObject.password,
        email: newUserObject.email,
        userInfo: {
            age: newUserObject.age,
            country: newUserObject.country,
            phone: newUserObject.phone
        }
    }

    return axios.post("/user-register", {data}).then(response => response.data)
}

const getUserProfile = (axios) => (userId) => {
    return axios.post('/user-getProfile ', {data: {userId: userId}}).then(response => response.data.result.message.user)
}

const addMovieToFavourites = axios => (movieId, userId) => {
    const data = {
        movieId,
        userId
    }
    return axios.post("/user-addFavouriteMovie", {data}).then(response => response.data.data)
}

const removeMovieFromFavourites = axios => (movieId, userId) => {
    console.log("Remove from favorites")
    const data = {
        movieId,
        userId
    }
    return axios.post("/user-removeFavouriteMovie", {data}).then(response => response.data.data)
}

const authApiService = {
    registerUserAccount: registerUserAccount(instance),
    getUserProfile: getUserProfile(instance),
    addMovieToFavourites: addMovieToFavourites(instance),
    removeMovieFromFavourites: removeMovieFromFavourites(instance),
}

export default authApiService;