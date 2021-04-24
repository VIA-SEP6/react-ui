import instance from "./axios";

const registerUserAccount = (axios) => (newUserObject) => {
    console.log(newUserObject)
    return axios.post("/registerUser", newUserObject).then(response => response.data)
}

const firebaseFunctionsService = {
    registerUserAccount: registerUserAccount(instance)

}

export default firebaseFunctionsService;