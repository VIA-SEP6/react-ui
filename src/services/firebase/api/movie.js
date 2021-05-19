import instance from "./axios";
import {firebaseOnCall} from "../firebase";

const searchMovie = (axios) => (movieName) => {
    return axios.post("/movies-search", {query: movieName}).then(response => response.data)
}

const getMovieDetails = (axios) => (movieId) => {
    return axios.post("/movies-get", {
        id: movieId,
        append_to_response: "credits,videos,recommendations"
    }).then(response => response.data.data)
}

const addReview = (userId, description, rating, movieId) => {
    return firebaseOnCall('reviews-add', {description, rating, movieId})
}

const likeReview = (reviewId) => {
    return firebaseOnCall('reviews-like', {reviewId})
}

const dislikeReview = (reviewId) => {
    return firebaseOnCall('reviews-dislike', {reviewId})
}

const clearReviewReaction = (reviewId) => {
    return firebaseOnCall('reviews-removeReaction', {reviewId})
}

const addComment = (movieId, content, parent) => {
    return firebaseOnCall('comments-add', {movieId, content, parent})
}

const likeComment = (commentId) => {
    return firebaseOnCall('comments-like', {commentId})
}

const dislikeComment = (commentId) => {
    return firebaseOnCall('comments-dislike', {commentId})
}

const clearCommentReaction = (commentId) => {
    return firebaseOnCall('comments-removeReaction', {commentId})
}

const getReviews = (movieId) => {
    return firebaseOnCall('movies-get', {
        id: movieId,
        append_to_response: "reviews"
    })
}

const movieApiService = {
    searchMovie: searchMovie(instance),
    getMovieDetails: getMovieDetails(instance),
    addReview,
    likeReview,
    dislikeReview,
    clearReviewReaction,
    addComment,
    likeComment,
    dislikeComment,
    clearCommentReaction,
    getReviews,
}

export default movieApiService;