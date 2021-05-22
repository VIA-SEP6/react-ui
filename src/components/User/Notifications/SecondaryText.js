import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {formatDateTime} from "../../../services/util/dateConverter";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "right",
        fontSize: 12
    }
}));

export default function SecondaryText(props) {
    const classes = useStyles()

    const {date} = props

    return (
        <Typography
            className={classes.root}
            component="span"
        >
            {formatDateTime(date)}
        </Typography>
    )
}