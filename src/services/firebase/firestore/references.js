import {firestore} from "../firebase";

const getReviewsByMovieIdReference = (movieId) => firestore.collection("reviews").where("movieId", "==", movieId)
const getCommentsByMovieIdReference = (movieId) => firestore.collection("comments").where("movieId", "==", movieId)
const getFavoriteMoviesByUserIdReference = (userId) => firestore.collection("users").doc(userId)
const getNotificationsForTheUserReference = (userId) => firestore.collection("notifications").where("recipient", "==", userId).orderBy("timestamp", "desc")

const firestoreReferenceService = {
    getReviewsByMovieIdReference,
    getCommentsByMovieIdReference,
    getFavoriteMoviesByUserIdReference,
    getNotificationsForTheUserReference
}

export default firestoreReferenceService