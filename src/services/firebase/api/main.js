import axiosInstance from "./axios";

const getUpcomingMovies = (axios) => () => {
    return axios.post("/movies-getUpcoming").then(response => response.data.data.results)
}

const getTopRatedMovies = (axios) => () => {
    return axios.post("/movies-getTopRated").then(response => response.data.data)
}

const mainPageApiService = {
    getUpcomingMovies: getUpcomingMovies(axiosInstance),
    getTopRatedMovies: getTopRatedMovies(axiosInstance)
}

export default mainPageApiService;