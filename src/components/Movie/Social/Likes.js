import {makeStyles} from "@material-ui/core/styles";
import {Icon, IconButton} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(0, 1),
        fontSize: 12,
        fontWeight: 300
    },
    like: {
        color: theme.palette.success.main
    },
    dislike: {
        color: theme.palette.error.main
    },
    iconButtonRoot: {
        color: "inherit",
        padding: theme.spacing(0.5)
    }
}));

export default function Likes(props) {
    const classes = useStyles()

    const {
        isLike = false,
        isDislike = false,
        likes = 0,
        dislikes = 0,
        onClear = () => {
        },
        onLike = () => {
        },
        onDislike = () => {
        }
    } = props

    const handleLikeClick = () => {
        if (isLike)
            onClear()
        else
            onLike()
    }

    const handleDislikeClick = () => {
        if (isDislike)
            onClear()
        else
            onDislike()
    }

    const generateIconButton = (condition, successClass, icon, amount, onClick) => (
        <div className={`${classes.rating} ${condition ? successClass : null}`}>
            <IconButton classes={{root: classes.iconButtonRoot}} onClick={onClick}>
                <Icon>{icon}</Icon>
            </IconButton>
            <span>{amount}</span>
        </div>
    )

    return (
        <div className={classes.root}>
            {generateIconButton(isLike, classes.like, "thumb_up_off_alt", likes, handleLikeClick)}
            {generateIconButton(isDislike, classes.dislike, "thumb_down_off_alt", dislikes, handleDislikeClick)}
        </div>
    )
}