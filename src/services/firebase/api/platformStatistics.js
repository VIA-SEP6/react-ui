import {firebaseOnCall} from "../firebase";

const getWeekly = () => {
    return firebaseOnCall('platformStatistics-getWeekly', {year: new Date().getFullYear()}).then(mapResponse)
}

const getMonthly = () => {
    return firebaseOnCall('platformStatistics-getMonthly', {year: new Date().getFullYear()}).then(mapResponse)
}

const getYearly = () => {
    return firebaseOnCall('platformStatistics-getYearly', {year: new Date().getFullYear()}).then(mapResponse)
}

const mapResponse = (response) => {
    return {
        reviews: Object.values(response.reviews),
        comments: Object.values(response.comments)
    }
}

const platformStatisticsApiService = {
    getWeeklyPlatformStatistics: getWeekly(),
    getMonthlyPlatformStatistics: getMonthly(),
    getYearlyPlatformStatistics: getYearly(),
}

export default platformStatisticsApiService;