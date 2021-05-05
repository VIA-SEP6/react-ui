import instance from "./axios";

const searchMovie = (axios) => (movieName) => {
    return axios.post("/searchMovie", {query: movieName}).then(response => response.data)
}

const getMovieDetails = (axios) => (movieId) => {
    return axios.post("/getMovie", {id: movieId, append_to_response: "credits,videos,similar"}).then(response => response.data.data)
}

const addReview = (axios) => (review) => {
    return axios.post("/reviews-add", {data: {review}}).then(response => response.data.data)

}

const movieApiService = {
    searchMovie: searchMovie(instance),
    getMovieDetails: getMovieDetails(instance),
    addReview: addReview(instance),
}

export default movieApiService;