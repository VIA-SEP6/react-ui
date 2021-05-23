import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import UpcomingMovies from "../components/Main/UpcommingMovies/UpcomingMovies";
import TopRatedMovies from "../components/Main/TopRatedMovies/TopRatedMovies";
import HorizontalLine from "../components/Layout/Seperator/HorizontalLine";
import PopularMovies from "../components/Main/PopularMovies/PopularMovies";
import TopCommenters from "../components/Main/TopCommenters/TopCommenters";
import {connect} from "react-redux";

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
                    <PopularMovies/>
                </Grid>
                {this.props.isAuthenticated
                    ? (
                        <Grid item xs={12} md={4}>
                            <TopCommenters/>
                        </Grid>
                    )
                    : null}
            </Grid>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user !== null,
    }
}

export default connect(mapStateToProps, null)(Main)
