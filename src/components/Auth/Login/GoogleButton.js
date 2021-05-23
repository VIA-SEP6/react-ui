import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    googleButton: {
        background: '#fff',
        '& img': {
            height: "32px"
        },
        '&:hover': {
            background: "rgba(0, 0, 0, 0.05)"
        },
    },
    root: {
        textTransform: "none",
        fontFamily: ["Roboto", "sans-serif"].join(","),
    }
}));


const GoogleButton = (props) => {
    const classes = useStyles()

    return (
        <Button
            className={classes.googleButton}
            classes={{root: classes.root}}
            variant="contained"
            onClick={props.onClick}
            startIcon={<img alt="Google Sign In"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>}>
            Sign in with Google
        </Button>
    )
}

export default GoogleButton