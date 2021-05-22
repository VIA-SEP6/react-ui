import {firebaseOnCall} from "../firebase";

const getPersonDetails = (id) => {
    return firebaseOnCall('people-get', {id})
}

const personApiService = {
    getPersonDetails
}

export default personApiService