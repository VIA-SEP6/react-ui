import {Container, makeStyles} from "@material-ui/core";
import Snackbar from "../Snackbar/Snackbar"
import React from "react";
import TopBar from "./TopBar/TopBar";

const useStyles = makeStyles((theme) => ({
    layout: {
        minHeight: '100vh',
        backgroundColor: theme.palette.tertiary.main
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(4)
    }
}));

export default function Layout(props) {
    const classes = useStyles()
    return (
        <div className={classes.layout}>
            <TopBar
                isAuthenticated={props.isAuthenticated}
                currentUser={props.currentUser}
                loginUser={props.loginUser}
                loginWithGoogle={props.loginWithGoogle}
                registerUser={props.registerUser}
                logoutUser={props.logoutUser}
            />
            <Container className={classes.content}>
                {props.children}
            </Container>
            <Snackbar/>

        </div>
    )
}