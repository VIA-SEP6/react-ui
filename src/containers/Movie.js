import React, {Component} from "react";
import movieApiService from "../services/firebase/api/movie";
import {Grid} from "@material-ui/core";
import Spinner from "../components/Layout/Loader/Spinner";
import MovieDetails from "../components/Movie/Details/MovieDetails";
import MovieCarousel from "../components/Movie/Videos/MovieCarousel";
import MovieCredits from "../components/Movie/Credits/MovieCredits";
import SimilarMovies from "../components/Movie/Similar/SimilarMovies";
import {connect} from "react-redux";
import {addReview} from "../store/actions";
import MovieSocialData from "../components/Movie/Social/MovieSocialData";
import reviewStatisticsApiService from "../services/firebase/api/reviewStatistics"

class Movie extends Component {
    initialState = {
        details: {},
        reviewStatistics: {},
        detailsLoading: true,
        statisticsLoading: true,
    }

    state = {
        ...this.initialState
    }

    init() {
        this.fetchMovieDetails(this.getSelectedMovieId());
        this.fetchReviewStatistics(this.getSelectedMovieId());
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

    fetchReviewStatistics = (id) => {
        reviewStatisticsApiService.getReviewStatistics(id)
            .then(reviewStatistics => {
                this.setState({
                    reviewStatistics,
                    statisticsLoading: false
                })
            })
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate = (prevProps) => {
        if (this.getSelectedMovieId() !== prevProps.match.params.id) {
            this.init()
        }
    };

    getSelectedMovieId() {
        return this.props.match.params.id
    }

    render() {
        let socialData = null

        if (this.props.isAuthenticated) {
            socialData = (
                <Grid item xs={12}>
                    <MovieSocialData movieId={this.getSelectedMovieId()}/>
                </Grid>
            )
        }


        let content = (
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} md={7}>
                    <Grid item xs={12}>
                        <MovieDetails
                            movie={this.state.details}
                            authenticated={this.props.isAuthenticated}
                            currentUser={this.props.currentUser}
                            addReview={this.props.addReview}
                            reviewStatistics={this.state.reviewStatistics}
                        />
                    </Grid>
                    <Grid item xs={12} style={{padding: "1rem 0"}}>
                        <MovieCarousel movie={this.state.details}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <MovieCredits movie={this.state.details}/>
                </Grid>
                {socialData}
                <Grid item xs={12}>
                    <SimilarMovies movie={this.state.details}/>
                </Grid>
            </Grid>
        )

        if (this.state.detailsLoading || this.state.statisticsLoading)
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
        currentUser: state.auth.user,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addReview: (userId, description, rating, movieId) => dispatch(addReview(userId, description, rating, movieId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie)
