import {InputBase, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        margin: theme.spacing(1),
    },
    label: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontWeight: "400",
        fontSize: "14px"
    },
    paper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: "12px"
    },
    error: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0),
        marginLeft: theme.spacing(1),
        fontSize: "12px",
        fontWeight: '300',
        color: theme.palette.error.main
    }
}));


const CustomInput = (props) => {
    const classes = useStyles();

    const getError = () => {
        const errorText = props.error
        if (errorText)
            return (
                <p className={classes.error}>{props.error}</p>
            )
        return null
    }

    return (
        <div className={classes.root}>
            <label className={classes.label} htmlFor={props.label}>{props.label}</label>
            <Paper component="form" className={classes.paper}>
                <InputBase
                    className={classes.input}
                    type={props.type}
                    placeholder={props.placeholder}
                    inputProps={{'aria-label': 'search google maps'}}
                    onInput={props.onInput}
                    onBlur={props.onBlur}
                />
            </Paper>
            {getError()}
            {/*<TextField  id={props.label} variant="outlined" onInput={props.onInput}/>*/}
        </div>
    )
}

export default CustomInput