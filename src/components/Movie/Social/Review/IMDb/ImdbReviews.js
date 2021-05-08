import {makeStyles} from "@material-ui/core/styles";
import SocialCard from "../../SocialCard/SocialCard";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function ImdbReviews(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/*<SocialCarad/>*/}
            <p>IMDb reviews will be here</p>
        </div>
    )
}