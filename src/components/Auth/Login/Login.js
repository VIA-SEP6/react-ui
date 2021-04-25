import {useState} from "react";
import {Button, Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import GoogleButton from "./GoogleButton";
import CustomModal from "../../Layout/Modal/CustomModal";
import Register from "../Register";

const useStyles = makeStyles((theme) => ({
    action: {
        margin: theme.spacing(1, 0),
        padding: theme.spacing(0, 2)
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        border: "none",
        padding: theme.spacing(3),
        maxWidth: '350px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        margin: theme.spacing(1)
    },
    forgotPassword: {
        marginTop: theme.spacing(1),
        fontWeight: '300',
        fontSize: "12px"
    }
}));

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    const handleLogin = (event) => {
        if (event.keyCode === 13) {
            props.loginUser(email, password)
        }
    }

    return (
        <Paper className={classes.paper}>
            <h4>Sign In to account</h4>
            <TextField
                className={classes.input}
                onInput={(e) => setEmail(e.target.value)}
                label="Email"
                type="text"
                size="small"
                onKeyDown={handleLogin}
            />
            <TextField
                className={classes.input}
                onInput={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                size="small"
                onKeyDown={handleLogin}
            />
            <Grid container justify="center" spacing={2} className={classes.action}>
                <Grid item sm={12} md={6}>
                    <Button
                        onClick={() => props.loginUser(email, password)}
                        variant={"text"}
                        color={"primary"}
                        fullWidth
                    >
                        Login
                    </Button>
                </Grid>
                <Grid item sm={12} md={6}>
                    <CustomModal
                        toggle={<Button variant={"text"} color={"primary"} fullWidth>Register</Button>}
                    >
                        <Register registerUser={props.registerUser}/>
                    </CustomModal>

                </Grid>
            </Grid>
            <GoogleButton onClick={() => props.loginWithGoogle()}/>
            <Button variant={"text"} size={"small"} className={classes.forgotPassword}>Forgot password</Button>
        </Paper>
    )
}

export default Login
