import axiosInstance from "./axios";

const getUpcomingMovies = (axios) => () => {
    return axios.post("/movies-getUpcoming").then(response => response.data.data.results)
}

const mainPageApiService = {
    getUpcomingMovies: getUpcomingMovies(axiosInstance)
}

export default mainPageApiService;