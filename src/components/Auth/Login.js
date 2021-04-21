import {useState} from "react";
import CustomInput from "../Form/CustomInput";
import CustomButton from "../Form/CustomButton";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    login: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& button': {
            margin: theme.spacing(1)
        }
    }
}));

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    return (
        <div className={classes.login}>
            <CustomInput label="Email" type="text" placeholder="Enter your email address"
                         onInput={(e) => setEmail(e.target.value)}/>
            <CustomInput label="Password" type="password" placeholder="Enter your password"
                         onInput={(e) => setPassword(e.target.value)}/>

            <div className={classes.actions}>
                <CustomButton onClick={() => props.loginUser(email, password)} color="primary" size="small">Login</CustomButton>
                <CustomButton onClick={() => props.registerUser(email, password)} color="primary" size="small">Register</CustomButton>
            </div>
        </div>
    )
}

export default Login
