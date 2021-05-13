import {Container, makeStyles} from "@material-ui/core";
import Snackbar from "../Snackbar/Snackbar"
import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";

const useStyles = makeStyles((theme) => ({
    layout: {
        position: "relative",
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main
    },
    content: {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
        paddingBottom: theme.spacing(7),
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: theme.spacing(5),
        padding: theme.spacing(1, 0)
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
            <Snackbar/>
            <Container className={classes.content}>
                {props.children}
            </Container>
            <div className={classes.footer}>
                <Footer/>
            </div>

        </div>
    )
}