import {makeStyles} from "@material-ui/core/styles";
import {Grid, Icon, Paper} from "@material-ui/core";
import Rank from "../Common/Rank";

const useStyles = makeStyles(theme => ({
    root: {
        width: "auto",
        margin: theme.spacing(2)
    },
    content: {
        display: "flex",
        flexDirection: "row",
        width: 200,
        border: "1px solid",
        borderColor: theme.palette.primary.main
    },
    details: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
    }
}));

export default function CommentRank(props) {
    const classes = useStyles()

    const {rank, username, likes, src} = props

    return (
        <Grid container direction="row" className={classes.root}>
            <Rank>{rank}</Rank>
            <Paper elevation={8} className={classes.content}>
                <img src={src} alt={username} height={72}/>
                <div className={classes.details}>
                    {username}
                    <div className={classes.likes}>
                        <Icon>thumb_up_off_alt</Icon>
                        <div>{likes}</div>
                    </div>
                </div>
            </Paper>
        </Grid>

    )
}