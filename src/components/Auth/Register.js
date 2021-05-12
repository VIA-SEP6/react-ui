import {useState} from "react";
import {Button, Grid, makeStyles, Paper, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
        backgroundColor: "#fff",
        maxWidth: '600px',
        padding: theme.spacing(3),
        margin: theme.spacing(3),
    },
    input: {
        textAlign: "center"
    },
    actions: {
        margin: theme.spacing(2),
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
    const [age, setAge] = useState(0);
    const [ageError, setAgeError] = useState(null);
    const [country, setCountry] = useState("");
    const [countryError, setCountryError] = useState(null);
    const [valid, setValid] = useState(false)

    const classes = useStyles();

    const getUserObject = () => {
        return {
            username,
            email,
            password,
            age,
            country,
            phone: "+4591919191"
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
            && ageError == null
            && countryError == null
        )
    }

    const validateUsername = (value) => {
        setUsername(value)
        if (!value || value.length < 4) {
            setUsernameError("Username must contain minimum 4 characters")
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
            return setPasswordError("Password must be at least 6 characters long")
        setPasswordError(null)
        validateForm()
    }

    const validateRepPassword = (value) => {
        if (value !== password || !value || value.length < 6)
            return setPasswordError("Passwords do not match")
        setPasswordError(null)
        validateForm()
    }

    const validateAge = (value) => {
        setAge(value)
        if (!value)
            return setAgeError("Age must not be empty")
        setAgeError(null)
        validateForm()
    }

    const validateCountry = (value) => {
        setCountry(value)
        if (!value)
            return setCountryError("Country must not be empty")
        setCountryError(null)
        validateForm()
    }

    return (
        <Paper className={classes.paper}>
            <h4 className={classes.header}>Create a new Account</h4>
            <Grid container spacing={3} justify={"center"} alignItems={"center"}>
                <Grid item xs={12} sm={6} className={classes.input}>
                    <TextField
                        error={usernameError != null}
                        helperText={usernameError}
                        label="Username"
                        type="text"
                        placeholder="Enter the username"
                        onBlur={(e) => validateUsername(e.target.value)}
                        onChange={(e) => validateUsername(e.target.value)}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.input}>
                    <TextField
                        error={emailError != null}
                        helperText={emailError}
                        label="Email"
                        type="email"
                        placeholder="Enter the email address"
                        onBlur={(e) => validateEmail(e.target.value)}
                        onChange={(e) => validateEmail(e.target.value)}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.input}>
                    <TextField
                        error={passwordError != null}
                        helperText={passwordError}
                        label="Password"
                        type="password"
                        placeholder="Type the password"
                        onBlur={(e) => validatePassword(e.target.value)}
                        onChange={(e) => validatePassword(e.target.value)}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.input}>
                    <TextField
                        label="Repeat Password"
                        type="password"
                        placeholder="Re-type the password"
                        onBlur={(e) => validateRepPassword(e.target.value)}
                        onChange={(e) => validateRepPassword(e.target.value)}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.input}>
                    <TextField
                        error={ageError != null}
                        helperText={ageError}
                        label="Age"
                        type="number"
                        placeholder="Enter the age"
                        onBlur={(e) => validateAge(e.target.value)}
                        onChange={(e) => validateAge(e.target.value)}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.input}>
                    <TextField
                        error={countryError != null}
                        helperText={countryError}
                        label="Country"
                        type="text"
                        placeholder="Enter the country name"
                        onBlur={(e) => validateCountry(e.target.value)}
                        onChange={(e) => validateCountry(e.target.value)}
                        size="small"
                    />
                </Grid>
                <Grid container justify="center" className={classes.actions}>
                    <Button color={"primary"} variant={"text"} size={"small"} onClick={createAccount} disabled={!valid}>Create
                        Account</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Register