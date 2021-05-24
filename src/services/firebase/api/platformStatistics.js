const getWeekly = () => {
    return Promise.resolve({comments: ["3"], reviews: ["5"]})
    // return firebaseOnCall('')
}

const getMonthly = () => {
    return Promise.resolve({comments: ["3"], reviews: ["5"]})
    // return firebaseOnCall('')
}

const getYearly = () => {
    return Promise.resolve({comments: [], reviews: []})
    // return firebaseOnCall('')
}

const platformStatisticsApiService = {
    getWeeklyPlatformStatistics: getWeekly(),
    getMonthlyPlatformStatistics: getMonthly(),
    getYearlyPlatformStatistics: getYearly(),
}

export default platformStatisticsApiService;