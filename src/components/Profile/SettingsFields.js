import { useState } from "react";
import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import { string } from "prop-types";

const useStyles = makeStyles((theme) => ({
    textField: {
        backgroundColor: "white",
        borderColor: theme.palette.primary.main,
        borderRadius: 15,
    },
    header: {
        paddingBottom: 10,
    },
    text: {
        color: theme.palette.gray.main,
        textAlign: "left",
        paddingLeft: 10,
        paddingTop: 10
    }
}));

const SettingsFields = (props) => {
    const {profileData} = props
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(null);
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [passwordValid, setPasswordValid] = useState(false)
    const [infoValid, setInfoValid] = useState(false)

    const classes = useStyles();

    const getPasswordObject = () => {
        return {
            oldPassword,
            password
        }
    }

    const getInfoObject = () => {
        return {
            username,
            phone,
            age,
            country
        }
    }

    const updatePassword = () => {
        props.updatePassword(getPasswordObject())
    }

    const updateInfo = () => {
        props.updateInfo(getInfoObject())
    }

    const validatePasswordForm = () => {
        setPasswordValid(
            passwordError == null && oldPassword.length>5
        )
    }

    const validateInfoForm = () => {
        setInfoValid(
            usernameError == null && ( username != null || (phone != null && phone.length>0)
            || (age != null && age.length>0) || (country != null && country.length>0))
        )
    }

    const validateUsername = (value) => {
        setUsername(value)
        if (value && value.length < 4) {
            setUsernameError(" Minimum 4 characters")
        } else {
            setUsernameError(null)
        }
        validateInfoForm()
    }

    const validatePhone = (value) => {
        setPhone(value)
        validateInfoForm()
    }

    const validateAge = (value) => {
        setAge(value)
        validateInfoForm()
    }

    const validateCountry = (value) => {
        setCountry(value)
        validateInfoForm()
    }

    const validatePassword = (value) => {
        setPassword(value)
        if (!value || value.length < 6){
            setPasswordError("At least 6 characters long")
        }
        else{
            setPasswordError(null)
        }
        validatePasswordForm()
    }

    const validateRepPassword = (value) => {
        if (value !== password || !value || value.length < 6){
            setPasswordError("Passwords do not match")
        }
        else{
            setPasswordError(null)
        }
        validatePasswordForm()
    }


    return (
        <Grid style={{justifyContent: "center"}}container spacing={6}>
            <Grid item xm={6}>
                <div className={classes.header}>Personal information</div>
                <div className={classes.text}>Username</div>
                <TextField className={classes.textField} variant="outlined" error={usernameError != null} helperText={usernameError} type="text" size="small"
                    placeholder={profileData.userName}
                    onChange={(e) => validateUsername(e.target.value)}
                    onBlur={(e) => validateUsername(e.target.value)} />
                <div className={classes.text}>Phone</div>
                <TextField className={classes.textField} variant="outlined" type="phone" size="small"
                    placeholder={profileData.phone}
                    onChange={(e) => validatePhone(e.target.value)}
                    onBlur={(e) => validatePhone(e.target.value)} />
                <div className={classes.text}>Age</div>
                <TextField className={classes.textField} variant="outlined" type="number" size="small"
                    placeholder={profileData.age}
                    onChange={(e) => validateAge(e.target.value)}
                    onBlur={(e) => validateAge(e.target.value)} />
                <div className={classes.text}>Country</div>
                <TextField className={classes.textField} variant="outlined" type="text" size="small"
                    placeholder={profileData.country}
                    onChange={(e) => validateCountry(e.target.value)}
                    onBlur={(e) => validateCountry(e.target.value)} />
                <div><Button color={"primary"} variant={"text"} size={"small"} 
                    onClick={updateInfo} disabled={!infoValid}>Update</Button></div>

            </Grid>
            <Grid item xm={6}>
                <div className={classes.header}>Change password</div>
                <div className={classes.text}>Old Password</div>
                <TextField className={classes.textField} variant="outlined" type="password" size="small"
                    onChange={(e) => setOldPassword(e.target.value)}
                    onBlur={(e) => setOldPassword(e.target.value)} />
                <div className={classes.text}>New Password</div>
                <TextField className={classes.textField} variant="outlined" error={passwordError != null} helperText={passwordError} type="password" size="small"
                    onChange={(e) => validatePassword(e.target.value)}
                    onBlur={(e) => validatePassword(e.target.value)} error={passwordError != null}/>
                <div className={classes.text}>Repeat New Password</div>
                <TextField className={classes.textField} variant="outlined" type="password" size="small"
                    onChange={(e) => validateRepPassword(e.target.value)}
                    onBlur={(e) => validateRepPassword(e.target.value)} />
                <div><Button color={"primary"} variant={"text"} size={"small"} 
                    onClick={updatePassword} disabled={!passwordValid}>Change Password</Button></div>
            </Grid>
        </Grid>
    )
}

export default SettingsFields