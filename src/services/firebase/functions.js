import instance from "./axios";

const registerUserAccount = (axios) => (newUserObject) => {
    console.log(newUserObject)
    return axios.post("/registerUser", newUserObject).then(response => response.data)
}

export default {
    registerUserAccount: registerUserAccount(instance)
}