import instance from "./axios";

const registerUserAccount = (axios) => (newUserObject) => {
    return axios.post("/user-register", {data: {user: {...newUserObject}}}).then(response => response.data)
}

const getUserProfile = (axios) => (uuid) => {
    return axios.post('/user-getProfile ', {data: {userUid: uuid}}).then(response => response.data.result.message.user)
}

const authApiService = {
    registerUserAccount: registerUserAccount(instance),
    getUserProfile: getUserProfile(instance)
}

export default authApiService;