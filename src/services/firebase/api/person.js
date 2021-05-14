import axiosInstance from './axios'

const getPersonDetails = (axios) => (personId) => {
    const data = {
        id: personId
    }
    return axios.post("/people-get", {data}).then(response => {
        console.log(response.data.result.message.person)
        return response.data.result.message.person
    })
}

const personApiService = {
    fetchPersonDetails: getPersonDetails(axiosInstance)
}

export default personApiService