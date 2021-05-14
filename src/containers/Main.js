import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import UpcomingMovies from "../components/Main/UpcommingMovies/UpcomingMovies";

class Main extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <UpcomingMovies/>
                </Grid>
                <Grid item xs={12}>
                    Top Rated Movies
                </Grid>
                <Grid item xs={12} md={8}>
                    Popular Movies
                </Grid>
                <Grid item xs={12} md={4}>
                    Top Commenter
                </Grid>
            </Grid>
        )
    }
}

export default Main;