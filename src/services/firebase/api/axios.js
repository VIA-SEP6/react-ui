import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_PATH,
    timeout: 15000,
});

export default instance