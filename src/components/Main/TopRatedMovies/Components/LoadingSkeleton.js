import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function LoadingSkeleton(props) {
    const classes = useStyles()

    return (
        <Grid container spacing={2} className={classes.root} justify="center" alignItems="center">
            <Grid container direction="row" spacing={2} item xs={12} justify="center">
                <Skeleton variant="text" width={160} height={100} style={{margin: "4px"}}/>
                <Skeleton variant="text" width={160} height={100} style={{margin: "4px"}}/>
            </Grid>
            <Grid container justify="center" alignItems="center" item xs={12} md={4}>
                <Skeleton variant="rect" width={300} height={230}/>
            </Grid>
            <Grid container justify="center" alignItems="center" direction="row" item xs={12} md={4}>
                <Skeleton variant="rect" width={300} height={230}/>
            </Grid>
            <Grid container justify="center" alignItems="center" direction="row" item xs={12} md={4}>
                <Skeleton variant="rect" width={300} height={230}/>
            </Grid>
        </Grid>
    )
}