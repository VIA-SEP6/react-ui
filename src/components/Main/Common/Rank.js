import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    rank: {
        margin: theme.spacing(2),
        borderRadius: "50%",
        background: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}));

export default function Rank(props) {
    const classes = useStyles()

    const {size = "big", style} = props

    const sizeStyle = {}
    switch (size) {
        case "big":
            sizeStyle.width = 40
            sizeStyle.height = 40
            sizeStyle.fontSize = 15
            break;
        case "medium":
            sizeStyle.width = 30
            sizeStyle.height = 30
            sizeStyle.fontSize = 13
            break;
        case "small":
            default:
            sizeStyle.width = 20
            sizeStyle.height = 20
            sizeStyle.fontSize = 11
            break;
    }

    return (
        <Paper style={{...sizeStyle, ...style}} elevation={2} className={classes.rank}>{props.children}</Paper>
    )
}