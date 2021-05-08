import {makeStyles} from "@material-ui/core/styles";
import UserAvatar from "../../../../../User/UserAvatar";
import React from "react";
import {useHistory} from "react-router-dom";
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
    const history = useHistory()

    const {avatarSrc, username, postDate, userId} = props

    const handleClick = () => {
        console.log("Will navigate to users profile")
        history.push(`/user/${userId}/profile`)
    }

    return (
        <Grid container alignItems="center" direction="row">
            <UserAvatar
                src={avatarSrc}
                onClick={handleClick}
            />
            <div>
                <div className={classes.username}>{username}</div>
                <div className={classes.date}>{postDate}</div>
            </div>
        </Grid>
    )
}