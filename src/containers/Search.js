import React, {Component} from "react";
import {searchMovie} from "../store/actions";
import {connect} from "react-redux";
import DetailedSearchResult from "../components/Search/DetailedSearchResult";

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
                <DetailedSearchResult movieName={this.getSearchMovieName()} movies={this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies,
        loading: state.movie.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (name) => dispatch(searchMovie(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)