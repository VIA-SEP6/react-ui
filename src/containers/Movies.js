import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";

import * as actions from "../store/actions/index"

class Movies extends Component {
    getMovies = () => {
        const movies = this.props.movies;

        if (!movies) {
            return "Fetch data first!"
        }

        return movies;
    }

    getErrorMessage = () => {
        if (this.props.error) {
            return this.props.error.toString()
        }
    }

    render() {
        return (
            <div>
                <p>{this.getMovies()}</p>
                <p>{this.getErrorMessage()}</p>
                <Button onClick={this.props.fetchMovies} variant="contained" color="primary">Fetch POC Data</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies,
        loading: state.movie.loading,
        error: state.movie.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(actions.fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)