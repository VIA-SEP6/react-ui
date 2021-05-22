import {Skeleton} from "@material-ui/lab";
import {Grid} from "@material-ui/core";

export default function LoadingSkeleton() {
    return (
        <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item xs={6}>
                <Skeleton variant="rect" height={210}/>
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rect" height={210}/>
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rect" height={210}/>
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rect" height={210}/>
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rect" height={210}/>
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rect" height={210}/>
            </Grid>
        </Grid>
    )
}