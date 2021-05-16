import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import PersonDetails from "../components/Person/Details/PersonDetails";
import Spinner from "../components/Layout/Loader/Spinner";
import KnownForMovies from "../components/Person/KnownFor/KnownForMovies";
import PersonStatisticsContainer from "../components/Person/Statistics/PersonStatisticsContainer";
import {searchMovie} from "../store/actions";
import {connect} from "react-redux";

class Search extends Component {
    init() {
        this.props.searchMovies(this.getSearchMovieName());
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate = (prevProps) => {
        if (this.getSearchMovieName() !== prevProps.match.params.name) {
            this.init()
        }
    };

    getSearchMovieName() {
        return this.props.match.params.name
    }

    render() {
        return (
            <div>
                {this.getSearchMovieName()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movies,
        loading: state.movie.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (name) => dispatch(searchMovie(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)