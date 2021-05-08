import {makeStyles} from "@material-ui/core/styles";
import MovieReview from "../Details/MovieReview";
import {useEffect, useState} from "react";
import firestoreReferenceService from "../../../../../services/firebase/firestore/references";

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function TheMovieAgentReviews(props) {
    const [reviews, setReviews] = useState([]);
    const classes = useStyles()

    const {movieId, currentUser} = props

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
                <MovieReview key={review.id} likesActive={true} review={review} currentUser={currentUser}/>
            ))}
        </div>
    )
}