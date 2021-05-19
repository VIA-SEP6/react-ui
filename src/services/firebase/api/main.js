import axiosInstance from "./axios";

const getUpcomingMovies = (axios) => () => {
    return axios.post("/movies-getUpcoming").then(response => response.data.data.results)
}

const getTopRatedMovies = (axios) => () => {
    return axios.post("/movies-getTopRated").then(response => response.data.data)
}

const getPopularMovies = (axios) => () => {
    return axios.post("/movies-getPopular").then(response => response.data.data.results)
}

const mainPageApiService = {
    getUpcomingMovies: getUpcomingMovies(axiosInstance),
    getTopRatedMovies: getTopRatedMovies(axiosInstance),
    getPopularMovies: getPopularMovies(axiosInstance)
}

export default mainPageApiService;