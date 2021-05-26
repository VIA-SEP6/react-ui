import {firebaseOnCall} from "../firebase";

const getReviewStatistics = (movieId) => {
    return firebaseOnCall('reviewStatistics-get', {movieId})
}

const reviewStatisticsApiService = {
    getReviewStatistics,
}

export default reviewStatisticsApiService;