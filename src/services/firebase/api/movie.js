import instance from "./axios";

const searchMovie = (axios) => (movieName) => {
    return axios.post("/movies-search", {query: movieName}).then(response => response.data)
}

const getMovieDetails = (axios) => (movieId) => {
    return axios.post("/movies-get", {
        id: movieId,
        append_to_response: "credits,videos,recommendations"
    }).then(response => response.data.data)
}

const addReview = (axios) => (userId, description, rating, movieId) => {
    const data = {
        userId, description, rating, movieId
    }
    return axios.post("/reviews-add", {data}).then(response => response.data.data)
}

const likeReview = (axios) => (userId, reviewId) => {
    const data = {
        userId,
        reviewId
    }
    return axios.post("/reviews-like", {data}).then(response => response.data.data)
}

const dislikeReview = (axios) => (userId, reviewId) => {
    const data = {
        userId,
        reviewId
    }
    return axios.post("/reviews-dislike", {data}).then(response => response.data.data)
}

const clearReviewReaction = (axios) => (userId, reviewId) => {
    const data = {
        userId,
        reviewId
    }

    return axios.post("/reviews-removeReaction", {data}).then(response => response.data.data)
}

const addComment = axios => (userId, movieId, comment, parentComment) => {
    const data = {
        userId: userId,
        movieId: movieId,
        content: comment,
        parent: parentComment
    }

    return axios.post("/comments-add", {data}).then(response => response.data.data)
}

const likeComment = axios => (userId, commentId) => {
    const data = {
        userId: userId,
        commentId: commentId
    }

    return axios.post("/comments-like", {data}).then(response => response.data.data)
}

const dislikeComment = axios => (userId, commentId) => {
    const data = {
        userId: userId,
        commentId: commentId
    }

    return axios.post("/comments-dislike", {data}).then(response => response.data.data)
}

const clearCommentReaction = axios => (userId, commentId) => {
    const data = {
        userId: userId,
        commentId: commentId
    }

    return axios.post("/comments-removeReaction", {data}).then(response => response.data.data)
}

const getReviews = axios => (movieId) => {
    return axios.post("/movies-get", {
        id: movieId,
        append_to_response: "reviews"
    }).then(response => response.data.data)
}

const movieApiService = {
    searchMovie: searchMovie(instance),
    getMovieDetails: getMovieDetails(instance),
    addReview: addReview(instance),
    likeReview: likeReview(instance),
    dislikeReview: dislikeReview(instance),
    clearReviewReaction: clearReviewReaction(instance),
    addComment: addComment(instance),
    likeComment: likeComment(instance),
    dislikeComment: dislikeComment(instance),
    clearCommentReaction: clearCommentReaction(instance),
    getReviews: getReviews(instance),
}

export default movieApiService;