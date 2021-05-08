import {firestore} from "../firebase";

const getReviewsByMovieIdReference = (movieId) => firestore.collection("reviews").where("movieId", "==", parseInt(movieId))
const getCommentsByMovieIdReference = (movieId) => firestore.collection("comments").where("movieId", "==", movieId)

const firestoreReferenceService = {
    getReviewsByMovieIdReference,
    getCommentsByMovieIdReference
}

export default firestoreReferenceService