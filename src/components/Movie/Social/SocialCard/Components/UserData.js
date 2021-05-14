import {makeStyles} from "@material-ui/core/styles";
import UserAvatar from "../../../../User/UserAvatar";
import React from "react";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row"
    },
    username: {
        fontWeight: 400,
        fontSize: 14
    },
    date: {
        fontWeight: 300,
        fontSize: 12
    }
}));

export default function UserData(props) {
    const classes = useStyles()

    const {
        avatarSrc, username, postDate,
        onClick = () => {
        }
    } = props

    return (
        <Grid container alignItems="center" direction="row">
            <UserAvatar
                src={avatarSrc}
                onClick={onClick}
            />
            <div>
                <div className={classes.username}>{username}</div>
                <div className={classes.date}>{postDate}</div>
            </div>
        </Grid>
    )
}