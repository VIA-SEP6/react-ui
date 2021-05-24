import {makeStyles} from "@material-ui/core/styles";
import SocialCard from "../../SocialCard/SocialCard";
import {useEffect, useState} from "react";
import firestoreReferenceService from "../../../../../services/firebase/firestore/references";
import movieApiService from "../../../../../services/firebase/api/movie";

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function TheMovieAgentReviews(props) {
    const [reviews, setReviews] = useState([]);
    const classes = useStyles()

    const {movieId, currentUser} = props

    const handleLike = (reviewId) => {
        movieApiService.likeReview(reviewId)
    }

    const handleDislike = (reviewId) => {
        movieApiService.dislikeReview(reviewId)
    }

    const handleClearReaction = (reviewId) => {
        movieApiService.clearReviewReaction(reviewId)
    }

    useEffect(() => {
        const unsub = firestoreReferenceService
            .getReviewsByMovieIdReference(movieId)
            .onSnapshot(
                snapshot => {
                    setReviews(snapshot.docs.map(doc => {
                        return {...doc.data(), id: doc.id}
                    }))
                },
                error => {
                    console.log(error.message)
                })
        return () => unsub()
    }, [setReviews, movieId])

    return (
        <div className={classes.root}>
            {reviews.map(review => (
                <SocialCard
                    key={review.id}
                    type="review"
                    isDislike={review.dislikes?.includes(currentUser.uid)}
                    dislikes={review.dislikes?.length}
                    isLike={review.likes?.includes(currentUser.uid)}
                    likes={review.likes?.length}
                    handleLike={() => handleLike(review.id)}
                    handleDislike={() => handleDislike(review.id)}
                    handleClearReaction={() => handleClearReaction(review.id)}
                    avatarSrc={review.user?.profilePhotoUrl}
                    username={review.user?.userName}
                    userId={review.userId}
                    description={review.description}
                    postDate={review.timestamp.toDate()}
                    rating={review.rating}
                />
            ))}
        </div>
    )
}