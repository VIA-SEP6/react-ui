import {useState} from "react";
import CustomInput from "../Form/CustomInput";
import CustomButton from "../Form/CustomButton";
import {Grid, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '300px',
    },
    action: {
        margin: '0'
    }
}));

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    const history = useHistory();
    return (
        <Grid className={classes.root} container>
            <Grid item sm={12}>
                <CustomInput label="Email" type="text" placeholder="Enter your email address"
                             onInput={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid item sm={12}>
                <CustomInput label="Password" type="password" placeholder="Enter your password"
                             onInput={(e) => setPassword(e.target.value)}/>
            </Grid>
            <Grid container justify="center" spacing={2} className={classes.action}>
                <Grid item sm={6}>
                    <CustomButton onClick={() => props.loginUser(email, password)} color="primary"
                                  size="small" fullWidth>Login</CustomButton>
                </Grid>
                <Grid item sm={6}>
                    <CustomButton onClick={() => history.push("/register")} color="primary"
                                  size="small" fullWidth>Register</CustomButton>
                </Grid>
            </Grid>
            <Grid item sm={12}>
                <CustomButton onClick={() => props.loginWithGoogle()} color="primary"
                              size="small" fullWidth>Google Sign In</CustomButton>
            </Grid>
        </Grid>
    )
}

export default Login
