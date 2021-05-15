import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import {formatDate} from "../../../../services/util/dateConverter";

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        minWidth: 300,
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        background: theme.palette.tertiary.main,
        marginBottom: theme.spacing(2),
        cursor: "pointer",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 140
    },
    image: {
        width: 160
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 500,
        height: 70,
        padding: theme.spacing(0, 1)
    },
    releaseDate: {
        fontSize: 12,
        fontWeight: 300,
    },
    rank: {
        margin: theme.spacing(2, 4),
        borderRadius: "50%",
        width: 40,
        height: 40,
        background: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rating: {
        fontSize: 20,
        fontWeight: 400,
        margin: theme.spacing(1, 0),
        "& span": {
            fontSize: 16,
        }
    },
    count: {
        fontSize: 14,
        fontWeight: 300,
        fontStyle: "italic"
    }

}));

export default function RankingCard(props) {
    const classes = useStyles()


    const {title, releaseDate, rank, rating, ratingsCount, imgSrc, onClick} = props

    return (
        <Paper elevation={8} className={classes.root} onClick={onClick}>
            <Grid container direction="row">
                <div className={classes.content}>
                    <span className={classes.title}>{title}</span>
                    <span className={classes.releaseDate}>{formatDate(new Date(releaseDate))}</span>
                    <span className={classes.rank}>{rank}</span>
                    <span className={classes.rating}>{rating}/<span>10</span></span>
                    <span className={classes.count}>({ratingsCount})</span>
                </div>
                <img className={classes.image} src={imgSrc} alt={title}/>
            </Grid>
        </Paper>
    )
}