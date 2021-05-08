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
        movieApiService.likeReview(currentUser.uid, reviewId)
    }

    const handleDislike = (reviewId) => {
        movieApiService.dislikeReview(currentUser.uid, reviewId)
    }

    const handleClearReaction = (reviewId) => {
        movieApiService.clearReviewReaction(currentUser.uid, reviewId)
    }

    useEffect(() => {

        firestoreReferenceService
            .getReviewsByMovieIdReference(movieId)
            .onSnapshot(
                snapshot => {
                    setReviews([])
                    snapshot.forEach(document => {
                        if (document.exists) {
                            const reviewObject = {
                                id: document.id, ...document.data(),
                            }
                            setReviews(reviews => [...reviews, reviewObject])
                        }

                    })
                },
                error => {
                    console.log(error.message)
                })
    }, [setReviews])

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
                    username={review.user?.username}
                    userId={review.userId}
                    description={review.description}
                    postDate={review.timestamp.toDate()}
                    rating={review.rating}
                />
            ))}
        </div>
    )
}