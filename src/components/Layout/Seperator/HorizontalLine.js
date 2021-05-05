import {Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    }
}))

export default function HorizontalLine() {
    const classes = useStyles()

    return (
        <div>
            <Divider className={classes.root}/>
        </div>
    )
}