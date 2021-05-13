import {makeStyles} from "@material-ui/core/styles";
import {Avatar, IconButton} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    avatarSmall: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        border: '1px solid',
        borderColor: theme.palette.primary.main
    },
}));

export default function UserAvatar(props) {
    const classes = useStyles()

    const {onClick, src} = props

    return (
        <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={onClick}
        >
            <Avatar className={classes.avatarSmall} alt="Profile UserAvatar" src={src}/>
        </IconButton>
    )
}