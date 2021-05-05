import React, {Component} from "react";
import movieApiService from "../services/firebase/api/movie";
import {Grid} from "@material-ui/core";
import Spinner from "../components/Layout/Loader/Spinner";
import MovieDetails from "../components/Movie/MovieDetails";
import MovieCarousel from "../components/Movie/Videos/MovieCarousel";
import MovieCredits from "../components/Movie/Credits/MovieCredits";
import SimilarMovies from "../components/Movie/Similar/SimilarMovies";
import MovieComments from "../components/Movie/Comments/MovieComments";
import {connect} from "react-redux";

class Movie extends Component {
    initialState = {
        details: {},
        detailsLoading: true,
    }

    state = {
        ...this.initialState
    }

    init() {
        this.fetchMovieDetails(this.props.match.params.id);
        this.fetchReviews(this.props.match.params.id);
        this.fetchComments(this.props.match.params.id);
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
        console.log("Fetch Comments not implemented")
    }

    fetchReviews = () => {
        console.log("Fetch Review not implemented")
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.init()
        }
    };

    render() {
        let comments = null
        if (this.props.isAuthenticated) {
            comments = (
                <Grid item xs={12}>
                    <MovieComments/>
                </Grid>
            )
        }


        let content = (
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} md={7}>
                    <Grid item xs={12}>
                        <MovieDetails movie={this.state.details}/>
                    </Grid>
                    <Grid item xs={12} style={{padding: "1rem 0"}}>
                        <MovieCarousel movie={this.state.details}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <MovieCredits movie={this.state.details}/>
                </Grid>
                {comments}
                <Grid item xs={12}>
                    <SimilarMovies movie={this.state.details}/>
                </Grid>
            </Grid>
        )

        if (this.state.detailsLoading)
            content = (
                <Spinner/>
            )

        return (
            <div style={{width: "100%"}}>{content}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user !== null,
    }
}


export default connect(mapStateToProps, null)(Movie)
