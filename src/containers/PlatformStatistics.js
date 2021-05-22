import {Component} from "react";
import PlatformStatisticsContainer from "../components/Statistics/Platform/PlatformStatisticsContainer";
import {Grid} from "@material-ui/core";

class PlatformStatistics extends Component {
    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <PlatformStatisticsContainer/>
                </Grid>
            </Grid>
        )
    }
}

export default PlatformStatistics