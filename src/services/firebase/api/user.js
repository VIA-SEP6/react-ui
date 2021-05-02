import instance from "./axios";

const registerUserAccount = (axios) => (newUserObject) => {
    return axios.post("/registerUser", {data: {user: {...newUserObject}}}).then(response => response.data)
}

const getUserProfile = (axios) => (uuid) => {
    return axios.post('/userProfile-getUserProfile', {data: {userUid: uuid}}).then(response => response.data)
}

const authApiService = {
    registerUserAccount: registerUserAccount(instance),
    getUserProfile: getUserProfile(instance)
}

export default authApiService;