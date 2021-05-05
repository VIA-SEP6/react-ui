import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        "& img": {
            height: theme.spacing(4),

        },
        "& p": {
            margin: theme.spacing(0, 0.5),
            fontWeight: 300,
            fontSize: 12,
            color: theme.palette.gray.main
        },
        "& span": {
            margin: theme.spacing(0,2),
            borderRadius: "50%",
            width: 5,
            height: 5,
            background: theme.palette.primary.main
        }
    }
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <Grid className={classes.root} container item xs={12} justify="center" alignItems="center" direction="row">
            <img src="https://jobbank.dk/images/dynamic/company/logo/32443/" alt="Logo"/>
            <p>&#169; VIA University College</p>
            <span></span>
            <p>The Movie Agent</p>
        </Grid>
    )
}