import {makeStyles} from "@material-ui/core/styles";
import {Grid, Icon, Paper} from "@material-ui/core";
import Rank from "../Common/Rank";
import {useHistory} from "react-router-dom";
import {getImageSrc} from "../../../services/util/imageValidation";

const useStyles = makeStyles(theme => ({
    root: {
        width: "auto",
        margin: theme.spacing(2, 0)
    },
    content: {
        display: "flex",
        flexDirection: "row",
        width: 240,
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        cursor: "pointer"
    },
    details: {
        fontSize: 14,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto"
    },
    likes: {
        margin: theme.spacing(1, 0),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        "& div": {
            margin: theme.spacing(0, 1),
            fontSize: 14,
            fontWeight: 300
        }
    },
    image: {
        borderTopLeftRadius: theme.spacing(0.4),
        borderBottomLeftRadius: theme.spacing(0.4),
        width: 80,
        height: 80,
        objectFit: "cover"
    }
}));

export default function CommentRank(props) {
    const classes = useStyles()
    const history = useHistory()

    const {rank, username, userId, commentCount, src} = props

    const handleClick = () => {
        history.push(`/profile/${userId}`)
    }

    return (
        <Grid container direction="row" className={classes.root}>
            <Rank>{rank}</Rank>
            <Paper elevation={8} className={classes.content} onClick={handleClick}>
                <img className={classes.image} src={getImageSrc(src)} alt={username}/>
                <div className={classes.details}>
                    {username}
                    <div className={classes.likes}>
                        <Icon color="primary">comment</Icon>
                        <div>{commentCount}</div>
                    </div>
                </div>
            </Paper>
        </Grid>

    )
}