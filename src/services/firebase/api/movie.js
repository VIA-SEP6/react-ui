import instance from "./axios";

const searchMovie = (axios) => (movieName) => {
    return axios.post("/searchMovie", {query: movieName}).then(response => response.data)
}

const getMovieDetails = (axios) => (movieId) => {
    return axios.post("/getMovie", {id: movieId, append_to_response: "credits"}).then(response => response.data.data)
}

const movieApiService = {
    searchMovie: searchMovie(instance),
    getMovie: getMovieDetails(instance)
}

export default movieApiService;