import React, {Component} from "react";
import movieApiService from "../services/firebase/api/movie";
import {Grid} from "@material-ui/core";
import Spinner from "../components/Layout/Loader/Spinner";
import MovieDetails from "../components/Movie/MovieDetails";

class Movie extends Component {
    initialState = {
        details: {},
        detailsLoading: true,
    }

    state = {
        ...this.initialState
    }

    fetchMovieDetails = (id) => {
        this.setState(this.initialState)
        movieApiService.getMovieDetails(id)
            .then(details => {
                this.setState({
                    details,
                    detailsLoading: false
                })
            })
    }

    fetchComments = () => {
        throw new DOMException("Not implemented")
    }

    fetchReviews = () => {
        throw new DOMException("Not implemented")
    }

    componentDidMount() {
        this.fetchMovieDetails(this.props.match.params.id);
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.match.params.id !== prevProps.match.params.id ) {
            this.fetchMovieDetails(this.props.match.params.id)
        }
    };

    render() {
        let content = (
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} md={7}>
                    <Grid item xs={12}>
                        <MovieDetails movie={this.state.details}/>
                    </Grid>
                    <Grid item xs={12}>Videos</Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <div>Cast</div>
                </Grid>
            </Grid>
        )

        if (this.state.detailsLoading)
            content = (
                <Spinner/>
            )

        return (
            <div style={{width: "100%", textAlign: "center"}}>{content}</div>
        )
    }
}


export default Movie
