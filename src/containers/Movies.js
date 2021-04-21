import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actions from "../store/actions/index"
import CustomButton from "../components/Form/CustomButton";

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
                <CustomButton onClick={this.props.fetchMovies} variant="contained" color="primary">Fetch POC
                    Data</CustomButton>
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