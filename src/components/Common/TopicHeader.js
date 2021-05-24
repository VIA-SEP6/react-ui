import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
    header: {
        fontSize: 24,
        fontWeight: 400,
        textAlign: "center"
    }
}));

export default function TopicHeader(props) {
    const classes = useStyles()

    return (
        <h3 className={classes.header}>{props.children}</h3>
    )
}