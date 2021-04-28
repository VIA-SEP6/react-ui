import instance from "./axios";

const searchMovie = (axios) => (movieName) => {
    // return axios.post("/search", movieName).then(response => response.data)
    return Promise.resolve([{
            id: 1,
            name: "Hunger Games",
            rating: "7.3/10",
            pictureUrl: "https://image.tmdb.org/t/p/w500/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg"
        }],
        [{
            id: 2,
            name: "Hunger Games - Catching Fire",
            rating: "8.2/10",
            pictureUrl: "https://image.tmdb.org/t/p/w500/7c1JtraYsjMMnk8Md0IMoyRzqZJ.jpg"
        }])
}

const movieApiService = {
    searchMovie: searchMovie(instance)
}

export default movieApiService;