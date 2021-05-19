import {firebaseOnCall} from "../firebase";

const searchMovie = (movieName) => {
    return firebaseOnCall('movies-search', {query: movieName,})
}

const getMovieDetails = (movieId) => {
    return firebaseOnCall('movies-get', {movieId, append_to_response: "credits,videos,recommendations"})
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
    return firebaseOnCall('movies-get', {movieId, append_to_response: "reviews"})
}

const movieApiService = {
    searchMovie,
    getMovieDetails,
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