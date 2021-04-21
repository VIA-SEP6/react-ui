import {useState} from "react";
import CustomInput from "../Form/CustomInput";
import {Grid, makeStyles} from "@material-ui/core";
import CustomButton from "../Form/CustomButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '700px',
    },
    actions: {
        margin: theme.spacing(2),
    },
    error: {
        fontSize: "14px",
        fontWeight: '300',
        color: theme.palette.error.main
    }
}));

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [repPassword, setRepPassword] = useState("");
    const [age, setAge] = useState(0);
    const [ageError, setAgeError] = useState("");
    const [country, setCountry] = useState("");
    const [countryError, setCountryError] = useState("");
    const [valid, setValid] = useState(false)

    const classes = useStyles();

    const getUserObject = () => {
        return {
            username,
            email,
            password,
            age,
            country
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
        setRepPassword(value)
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
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <CustomInput error={usernameError} label="Username" type="text" placeholder="Enter the username"
                                 onBlur={(e) => validateUsername(e.target.value)}
                                 onInput={(e) => validateUsername(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInput error={emailError} label="Email" type="email" placeholder="Enter the email address"
                                 onBlur={(e) => validateEmail(e.target.value)}
                                 onInput={(e) => validateEmail(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInput error={passwordError} label="Password" type="password" placeholder="Type the password"
                                 onBlur={(e) => validatePassword(e.target.value)}
                                 onInput={(e) => validatePassword(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInput label="Repeat Password" type="password" placeholder="Re-type the password"
                                 onBlur={(e) => validateRepPassword(e.target.value)}
                                 onInput={(e) => validateRepPassword(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInput error={ageError} label="Age" type="number" placeholder="Enter the age"
                                 onBlur={(e) => validateAge(e.target.value)}
                                 onInput={(e) => validateAge(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInput error={countryError} label="Country" type="text" placeholder="Enter the country name"
                                 onBlur={(e) => validateCountry(e.target.value)}
                                 onInput={(e) => validateCountry(e.target.value)}/>
                </Grid>
                <Grid container justify="center" className={classes.actions}>
                    <CustomButton onClick={createAccount} color="primary" disabled={!valid}
                                  size="small">Create Account</CustomButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default Register