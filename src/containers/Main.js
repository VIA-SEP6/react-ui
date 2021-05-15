import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import UpcomingMovies from "../components/Main/UpcommingMovies/UpcomingMovies";
import TopRatedMovies from "../components/Main/TopRatedMovies/TopRatedMovies";
import HorizontalLine from "../components/Layout/Seperator/HorizontalLine";

class Main extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <UpcomingMovies/>
                </Grid>
                <HorizontalLine/>
                <Grid item xs={12}>
                    <TopRatedMovies/>
                </Grid>
                <HorizontalLine/>
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