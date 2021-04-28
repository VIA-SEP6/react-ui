import instance from "./axios";

const searchMovie = (axios) => (movieName) => {
    return axios.post("/searchMovie", {query: movieName}).then(response => response.data)
}

const movieApiService = {
    searchMovie: searchMovie(instance)
}

export default movieApiService;