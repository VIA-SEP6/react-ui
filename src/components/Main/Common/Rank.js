import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    rank: {
        margin: theme.spacing(2),
        borderRadius: "50%",
        width: 40,
        height: 40,
        background: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}));

export default function Rank(props) {
    const classes = useStyles()

    return (
        <Paper elevation={2} className={classes.rank}>{props.children}</Paper>
    )
}