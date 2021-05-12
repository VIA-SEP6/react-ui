import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      alignItems: "center"
    },
    icon: {
        padding: theme.spacing(0, 0.5)
    },
    rating: {
        fontSize: 12,
        fontWeight: 300
    }
}))

export default function MovieRating(props) {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <img
                    className={classes.icon}
                    src={props.iconSrc}
                    alt="Rating Icon" height="14px"/>
                <span className={classes.rating}>{props.rating}/10</span>
            </div>
    )
}