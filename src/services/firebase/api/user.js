import instance from "./axios";

const registerUserAccount = (axios) => (newUserObject) => {
    return axios.post("/registerUser", newUserObject).then(response => response.data)
}

const authApiService = {
    registerUserAccount: registerUserAccount(instance)
}

export default authApiService;