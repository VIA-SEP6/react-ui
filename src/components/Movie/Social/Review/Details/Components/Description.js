import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1, 2),
        fontWeight: 300,
        textAlign: "justify"
    }
}));

export default function Description(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {props.text}
        </div>
    )
}