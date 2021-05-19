import {firebaseOnCall} from "../firebase";

const getUpcomingMovies = () => {
    return firebaseOnCall('movies-getUpcoming').then(result => result.results)
}

const getTopRatedMovies = () => {
    return firebaseOnCall('movies-getTopRated')
}

const getPopularMovies = () => {
    return firebaseOnCall('movies-getPopular').then(result => result.results)
}

const mainPageApiService = {
    getUpcomingMovies,
    getTopRatedMovies,
    getPopularMovies
}

export default mainPageApiService;