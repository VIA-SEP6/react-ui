import {Grid} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

export default function LoadingSkeleton() {
    return (
        <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item>
                <Skeleton variant="text" height={30} width={200}/>
            </Grid>
            <Grid item>
                <Skeleton variant="text" height={30} width={200}/>
            </Grid>
            <Grid item xs={12}>
                <Skeleton variant="rect" height={500}/>
            </Grid>
        </Grid>
    )
}