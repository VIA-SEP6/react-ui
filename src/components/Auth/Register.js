import {useState} from "react";
import {Button, makeStyles, Paper, TextField} from "@material-ui/core";
import TopicHeader from "../Main/Common/TopicHeader";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
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
    actions: {
        marginTop: theme.spacing(2),
    },
    error: {
        fontSize: "14px",
        fontWeight: '300',
        color: theme.palette.error.main
    },
    header: {
        marginBottom: theme.spacing(4)
    }
}));

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(null);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [valid, setValid] = useState(false)

    const classes = useStyles();

    const getUserObject = () => {
        return {
            username,
            email,
            password,
        }
    }

    const createAccount = () => {
        props.registerUser(getUserObject())
    }

    const validateForm = () => {
        setValid(
            usernameError == null
            && emailError == null
            && passwordError == null
        )
    }

    const validateUsername = (value) => {
        setUsername(value)
        if (!value || value.length < 4) {
            setUsernameError("Too short username")
        } else {
            setUsernameError(null)
        }
        validateForm()
    }

    const validateEmail = (value) => {
        setEmail(value)
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
            setEmailError(null)
        } else {
            setEmailError("Invalid email")
        }
        validateForm()
    }

    const validatePassword = (value) => {
        setPassword(value)
        if (!value || value.length < 6)
            return setPasswordError("Too short password")
        setPasswordError(null)
        validateForm()
    }

    const validateRepPassword = (value) => {
        if (value !== password || !value || value.length < 6)
            return setPasswordError("Passwords do not match")
        setPasswordError(null)
        validateForm()
    }


    return (
        <Paper elevation={8} className={classes.paper}>
            <TopicHeader>Create a new Account</TopicHeader>
            <TextField
                className={classes.input}
                error={usernameError != null}
                helperText={usernameError}
                label="Username"
                type="text"
                size="small"
                onBlur={(e) => validateUsername(e.target.value)}
                onChange={(e) => validateUsername(e.target.value)}
            />
            <TextField
                className={classes.input}
                error={emailError != null}
                helperText={emailError}
                label="Email"
                type="email"
                size="small"
                onBlur={(e) => validateEmail(e.target.value)}
                onChange={(e) => validateEmail(e.target.value)}
            />
            <TextField
                className={classes.input}
                error={passwordError != null}
                helperText={passwordError}
                label="Password"
                type="password"
                size="small"
                onBlur={(e) => validatePassword(e.target.value)}
                onChange={(e) => validatePassword(e.target.value)}
            />
            <TextField
                className={classes.input}
                label="Repeat Password"
                type="password"
                size="small"
                onBlur={(e) => validateRepPassword(e.target.value)}
                onChange={(e) => validateRepPassword(e.target.value)}
            />
            <Button className={classes.actions} color={"primary"} variant={"text"} size={"small"} onClick={createAccount} disabled={!valid}>Create
                Account</Button>
        </Paper>
    )
}

export default Register