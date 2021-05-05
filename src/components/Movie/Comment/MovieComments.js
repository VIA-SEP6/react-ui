import HorizontalLine from "../../Layout/Seperator/HorizontalLine";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center"
    },
}))

export default function MovieComments(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <HorizontalLine/>
            <h3>Comments</h3>
        </div>
    )
}