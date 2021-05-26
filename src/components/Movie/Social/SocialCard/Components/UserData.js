import {makeStyles} from "@material-ui/core/styles";
import UserAvatar from "../../../../User/UserAvatar";
import React from "react";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";

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
    const history = useHistory()

    const {
        avatarSrc, username, postDate, userId, disabled,
        onClick = () => {
            history.push(`/profile/${userId}`)
        }
    } = props

    return (
        <Grid container alignItems="center" direction="row">
            <UserAvatar
                disabled={disabled}
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