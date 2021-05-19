import {makeStyles} from "@material-ui/core/styles";
import movieApiService from "../../../../../services/firebase/api/movie";
import {useEffect, useState} from "react";
import SocialCard from "../../SocialCard/SocialCard";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function ImdbReviews(props) {
    const [reviews, setReviews] = useState([])

    const {movieId} = props

    const classes = useStyles()

    const fetchReviews = (movieId) => {
        movieApiService.getReviews(movieId)
            .then(response => {
                setReviews(response.reviews.results)
            })
    }

    useEffect(() => {
        fetchReviews(movieId);
        return () => {
            setReviews([])
        }
    }, [movieId])

    return (
        <div className={classes.root}>
            {reviews.map(review => (
                <SocialCard
                    key={review.id}
                    type="external-review"
                    avatarSrc={review.author_details.avatar_path}
                    username={review.author_details.username}
                    description={review.content}
                    postDate={new Date(review.created_at)}
                    rating={review.author_details.rating}
                />
            ))}
        </div>
    )
}