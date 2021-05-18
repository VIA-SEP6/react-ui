import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import UserData from "./Components/UserData";
import Rating from "./Components/Rating";
import Description from "./Components/Description";
import Likes from "../Likes";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    likesRight: {
        marginLeft: 'auto'
    }
}));

export default function SocialCard(props) {
    const classes = useStyles()

    const {
        type, // "review" | "comment" | "external-review"
        isDislike,
        dislikes,
        isLike,
        likes,
        handleLike,
        handleDislike,
        handleClearReaction,
        avatarSrc,
        username,
        userId,
        description,
        postDate,
        rating
    } = props

    const getPostDate = () => {
        return postDate ? `${postDate.getDate()} ${monthNames[postDate.getMonth()]} ${postDate.getFullYear()}` : ""
    }

    const renderLikes = (
        <Grid item xs={12} sm={4} className={type === "comment" ? classes.likesRight : null}>
            <Likes
                isDislike={isDislike}
                dislikes={dislikes}
                isLike={isLike}
                likes={likes}
                onLike={handleLike}
                onDislike={handleDislike}
                onClear={handleClearReaction}
            />
        </Grid>
    )

    const renderRating = (
        <Grid item xs={6} sm={4}>
            <Rating rating={rating}/>
        </Grid>
    )

    return (
        <Grid container item xs={12} alignItems="center" className={classes.root}>
            <Grid item xs={12} sm={4}>
                <UserData avatarSrc={avatarSrc} username={username} postDate={getPostDate()} userId={userId}/>
            </Grid>
            {type !== "comment" ? renderRating : null}
            {type !== "external-review" ? renderLikes : null}
            <Grid item xs={12}>
                <Description text={description}/>
            </Grid>
        </Grid>
    )
}