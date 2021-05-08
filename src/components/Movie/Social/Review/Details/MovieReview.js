import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import UserData from "./Components/UserData";
import Rating from "./Components/Rating";
import Description from "./Components/Description";
import Likes from "../../Likes";
import movieApiService from "../../../../../services/firebase/api/movie";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    }
}));

export default function MovieReview(props) {
    const classes = useStyles()

    const {review, currentUser, likesActive} = props

    const getPostDate = () => {
        const postDate = review.timestamp.toDate()
        return `${postDate.getDate()} ${monthNames[postDate.getMonth()]} ${postDate.getFullYear()}`
    }

    const handleLike = () => {
        movieApiService.likeReview(currentUser.uid, review.id)
    }

    const handleDislike = () => {
        movieApiService.dislikeReview(currentUser.uid, review.id)
    }

    const handleClearReaction = () => {
        movieApiService.clearReviewReaction(currentUser.uid, review.id)
    }

    const likes = (
        <Grid item xs={12} sm={4}>
            <Likes
                isDislike={review.dislikes?.includes(currentUser.uid)}
                dislikes={review.dislikes?.length}
                isLike={review.likes?.includes(currentUser.uid)}
                likes={review.likes?.length}
                onLike={handleLike}
                onDislike={handleDislike}
                onClear={handleClearReaction}
            />
        </Grid>
    )

    return (
        <Grid container item xs={12} alignItems="center" className={classes.root}>
            <Grid item xs={6} sm={4}>
                <UserData avatarSrc={review.user?.profilePhotoUrl} username={review.user?.username} postDate={getPostDate()} userId={review.userId} />
            </Grid>
            <Grid item xs={6} sm={4}>
                <Rating rating={review.rating}/>
            </Grid>
            {likesActive ? likes : null}
            <Grid item xs={12}>
                <Description text={review.description}/>
            </Grid>
        </Grid>
    )
}