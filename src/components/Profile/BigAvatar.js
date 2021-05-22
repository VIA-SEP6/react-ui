import {makeStyles} from "@material-ui/core/styles";
import {Avatar, IconButton} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    avatarBig: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        border: '1px solid',
        borderColor: theme.palette.primary.main
    },
}));

export default function BigAvatar(props) {
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