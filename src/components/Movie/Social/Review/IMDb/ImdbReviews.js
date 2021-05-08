import {makeStyles} from "@material-ui/core/styles";
import MovieReview from "../Details/MovieReview";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function ImdbReviews(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/*<MovieReview/>*/}
            <p>IMDb reviews will be here</p>
        </div>
    )
}