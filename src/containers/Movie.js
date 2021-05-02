import {Component} from "react";
import MovieDetails from "../components/Movie/MovieDetails";
import movieApiService from "../services/firebase/api/movie";

class Movie extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        movieApiService.getMovie(this.props.match.params.id)
            .then(movie => {
                this.setState({
                    movie
                })
            })

    }

    render() {
        return (
            <MovieDetails movie={this.state.movie}/>
        )
    }
}


export default Movie
