import {makeStyles} from "@material-ui/core/styles";
import {Skeleton} from "@material-ui/lab";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4)
    },
    skeleton: {
        margin: theme.spacing(1)
    }
}));

export default function LoadingSkeleton() {
    const classes = useStyles()

    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container direction="row" alignItems="center" justify="center">
                <Skeleton variant="text" width={300} height={40}/>
            </Grid>
            <Grid container spacing={2} direction="row">
                <Grid item xs={12} md={4}>
                    <Skeleton variant="text"/>
                    <Skeleton variant="rect" height={210}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Skeleton variant="text"/>
                    <Skeleton variant="rect" height={210}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Skeleton variant="text"/>
                    <Skeleton variant="rect" height={210}/>
                </Grid>
            </Grid>
        </Grid>
    )
}