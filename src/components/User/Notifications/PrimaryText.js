import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: 14,
        whiteSpace: "initial",
    }
}));

export default function PrimaryText(props) {
    const classes = useStyles()

    const {notification} = props;

    const getActionText = () => {
        let text
        switch (notification.action) {
            case "like":
                text = "liked"
                break
            case "dislike":
                text = "disliked"
                break
            default:
                text = "<UNKNOWN>"
        }
        return text
    }

    const getCategoryText = () => {
        let text
        switch (notification.category) {
            case "reviews":
                text = "review"
                break
            case "comments":
                text = "comment"
                break
            default:
                text = "<UNKNOWN>"
        }
        return text
    }


    return (
        <div className={classes.root}>
            <Typography
                component="span"
                variant="subtitle2"
            >
                {notification.subject.userName}
            </Typography>
            {` has ${getActionText()} your ${getCategoryText()}`}
        </div>
    );
}