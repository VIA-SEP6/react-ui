import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: 30
    },
}))


export default function ScrollButton(props) {
    const classes = useStyles();
    let borderRadius = {
        borderRadius: 0
    }

    switch (props.type) {
        case "bottom":
            borderRadius.borderBottomLeftRadius = "4px"
            borderRadius.borderBottomRightRadius = "4px"
            break;
        case "top":
        default:
            borderRadius.borderTopLeftRadius = "4px"
            borderRadius.borderTopRightRadius = "4px"
            break;
    }

    return (
        <IconButton className={classes.root} style={{...borderRadius}}
                    onClick={props.onClick}>{props.children}</IconButton>
    )
}