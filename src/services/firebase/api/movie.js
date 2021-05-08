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

const likeReview = (axios) => (userId, reviewId) => {
    const likeReviewRequest = {
        userUid: userId,
        reviewId
    }
    return axios.post("/reviews-like", {data: {likeReviewRequest}}).then(response => response.data.data)
}

const dislikeReview = (axios) => (userId, reviewId) => {
    const dislikeReviewRequest = {
        userUid: userId,
        reviewId
    }
    return axios.post("/reviews-dislike", {data: {dislikeReviewRequest}}).then(response => response.data.data)
}

const clearReviewReaction = (axios) => (userId, reviewId) => {
    const clearReviewReactionRequest = {
        userUid: userId,
        reviewId
    }

    return axios.post("/reviews-removeReaction", {data: {clearReviewReactionRequest}}).then(response => response.data.data)
}

const addComment = axios => (userId, movieId, comment, parentComment = null) => {
    const addCommentRequest = {
        userId: userId,
        movieId: movieId,
        content: comment,
        parent: parentComment
    }

    return axios.post("/comments-create", {data: {addCommentRequest}}).then(response => response.data.data)
}

const likeComment = axios => (userId, commentId) => {
    const likeCommentRequest = {
        userId: userId,
        commentId: commentId
    }

    return axios.post("/comments-like", {data: {likeCommentRequest}}).then(response => response.data.data)
}

const dislikeComment = axios => (userId, commentId) => {
    const dislikeCommentRequest = {
        userId: userId,
        commentId: commentId
    }

    return axios.post("/comments-create", {data: {dislikeCommentRequest}}).then(response => response.data.data)
}

const clearCommentReaction = axios => (userId, commentId) => {
    const clearCommentRequest = {
        userId: userId,
        commentId: commentId
    }

    return axios.post("/comments-clear", {data: {clearCommentRequest}}).then(response => response.data.data)
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
}

export default movieApiService;