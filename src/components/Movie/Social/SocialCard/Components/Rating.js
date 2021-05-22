import {makeStyles} from "@material-ui/core/styles";
import {Grid, Icon} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.primary.main
    },
    rating: {
        fontSize: 12,
        fontWeight: 300,
        "& span": {
            fontSize: 14

        }
    },
}));

export default function Rating(props) {
    const classes = useStyles()
    const {rating} = props

    const getRating = (
        <div>
            <Icon className={classes.icon}>star</Icon>
            <span className={classes.rating}>
                <span>{rating}/</span>
                10
            </span>
        </div>
    )
    return (
        <Grid container justify="center" alignItems="center" direction="row">
            {rating ? getRating : <span className={classes.rating}>No Rating</span>}
        </Grid>
    )
}