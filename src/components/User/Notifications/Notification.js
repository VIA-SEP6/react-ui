import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import HorizontalLine from "../../Layout/Seperator/HorizontalLine";
import UserAvatar from "../UserAvatar";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function Notification(props) {
    const classes = useStyles()

    return (
        <Grid container spacing={1} justify="center" alignItems="center" direction="row" className={classes.root}>
            <Grid item xs={12}>
                <HorizontalLine/>
            </Grid>
            <Grid item>
                .
            </Grid>
            <Grid item>
                <UserAvatar/>
            </Grid>
        </Grid>
    )
}