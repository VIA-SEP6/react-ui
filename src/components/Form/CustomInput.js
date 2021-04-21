import {InputBase, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        margin: theme.spacing(1),
        width: 300,
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
}));


const CustomInput = (props) => {
    const classes = useStyles();
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
                />
            </Paper>
            {/*<TextField  id={props.label} variant="outlined" onInput={props.onInput}/>*/}
        </div>
    )
}

export default CustomInput