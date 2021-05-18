import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {Icon} from "@material-ui/core";

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

    const {iconSrc, rating, icon} = props

    const getRating = () => {
        return rating === 0 || !rating ? "No Rating" : `${rating.toFixed(1)}/10`
    }

    const ratingIcon = (
        icon ? <Icon color="primary">{icon}</Icon>
            : <img
                className={classes.icon}
                src={iconSrc}
                alt="Rating Icon" height="14px"/>
    )

    return (
        <div className={classes.root}>
            {ratingIcon}
            <span className={classes.rating}>{getRating()}</span>
        </div>
    )
}