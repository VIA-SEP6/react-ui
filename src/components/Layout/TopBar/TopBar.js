import {makeStyles} from "@material-ui/core/styles";
import {Hidden, Icon} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom"
import UserMenuItem from "./UserMenuItem";
import DesktopSearch from "../../Movie/Search/DesktopSearch";
import PhoneSearch from "../../Movie/Search/PhoneSearch";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: theme.spacing(0),
        background: "rgba(0, 0, 0, 0.05)",
        boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
    },
    search: {
        paddingLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: "auto",
        },
        [theme.breakpoints.up('md')]: {
            marginRight: "auto",
        },
    },
    logo: {
        paddingLeft: theme.spacing(2),
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        "& h3": {
            padding: theme.spacing(0, 2)
        }
    }
}))


export default function TopBar(props) {
    const classes = useStyles()
    const history = useHistory()

    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <Icon>movie</Icon>
                <h3 onClick={() => history.push("/")}>The Movie Agent</h3>
            </div>
            <div className={classes.search}>
                <Hidden smDown>
                    <DesktopSearch/>
                </Hidden>
                <Hidden mdUp>
                    <PhoneSearch/>
                </Hidden>
            </div>
            <div>
                <UserMenuItem
                    isAuthenticated={props.isAuthenticated}
                    currentUser={props.currentUser}
                    loginUser={props.loginUser}
                    loginWithGoogle={props.loginWithGoogle}
                    registerUser={props.registerUser}
                    logoutUser={props.logoutUser}
                />
            </div>
        </div>
    )
}