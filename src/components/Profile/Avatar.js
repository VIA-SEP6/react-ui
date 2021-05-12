import {makeStyles} from "@material-ui/core/styles";
import {Avatar, IconButton} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    avatarBig: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        border: '1px solid',
        borderColor: theme.palette.primary.main
    },
}));

export default function Avatar(props) {
    const classes = useStyles()

    const {src} = props

    return (
        <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
        >
            <Avatar className={classes.avatarBig} alt="Profile UserAvatar" src={src}/>
        </IconButton>
    )
}