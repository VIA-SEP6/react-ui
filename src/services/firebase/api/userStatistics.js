import {firebaseOnCall} from "../firebase";

const getTopCommenters = () => {
    return firebaseOnCall('usersStatistics-getTopCommenters')
}

const userStatisticsApiService = {
    getTopCommenters,
}

export default userStatisticsApiService;