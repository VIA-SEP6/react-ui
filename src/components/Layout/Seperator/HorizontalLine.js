import {Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        margin: theme.spacing(3, 0)
    },
    divider: {
        backgroundColor: theme.palette.primary.main,
    }
}))

export default function HorizontalLine() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Divider className={classes.divider}/>
        </div>
    )
}