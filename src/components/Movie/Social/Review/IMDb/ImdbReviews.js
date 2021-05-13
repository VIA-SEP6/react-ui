import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function ImdbReviews(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <p>IMDb reviews will be here</p>
        </div>
    )
}