import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    root: {
        width: 272
    },
    item: {
        margin: theme.spacing(2)
    }
}));

export default function LoadingSkeleton(props) {
    const classes = useStyles()

    return (
        <Grid container direction="column" alignItems="center" className={classes.root}>
            <Grid className={classes.item} container direction="row" alignItems="center" item xs={12}>
                <Skeleton variant="circle" height={40} width={40} style={{margin: "1rem"}}/>
                <Skeleton variant="rect" height={72} width={200}/>
            </Grid>
            <Grid className={classes.item} container direction="row" alignItems="center" item xs={12}>
                <Skeleton variant="circle" height={40} width={40} style={{margin: "1rem"}}/>
                <Skeleton variant="rect" height={72} width={200}/>
            </Grid>
            <Grid className={classes.item} container direction="row" alignItems="center" item xs={12}>
                <Skeleton variant="circle" height={40} width={40} style={{margin: "1rem"}}/>
                <Skeleton variant="rect" height={72} width={200}/>
            </Grid>
            <Grid className={classes.item} container direction="row" alignItems="center" item xs={12}>
                <Skeleton variant="circle" height={40} width={40} style={{margin: "1rem"}}/>
                <Skeleton variant="rect" height={72} width={200}/>
            </Grid>
            <Grid className={classes.item} container direction="row" alignItems="center" item xs={12}>
                <Skeleton variant="circle" height={40} width={40} style={{margin: "1rem"}}/>
                <Skeleton variant="rect" height={72} width={200}/>
            </Grid>
        </Grid>
    )
}