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

const getUserProfile = (axios) => (uuid) => {
    return axios.post('/user-getProfile ', {data: {userId: uuid}}).then(response => response.data.result.message.user)
}

const authApiService = {
    registerUserAccount: registerUserAccount(instance),
    getUserProfile: getUserProfile(instance)
}

export default authApiService;