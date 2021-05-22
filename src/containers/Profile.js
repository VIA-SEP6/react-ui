import {Component} from "react";
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";
import {fetchProfile} from "../store/actions";
import ProfileData from "../components/Profile/ProfileData"
import FavoriteMovies from "../components/Profile/FavoriteMovies"

class Profile extends Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.userId)
    }

    render() {
        return (
                <Grid container spacing={2} >
                    <Grid item  sm={4} lg={2}>
                        <ProfileData profileData={this.props.profileData}/>
                    </Grid>
                    <Grid item  sm={8} lg={10}>
                        <FavoriteMovies favoriteMovies={this.props.favoriteMovies}/> 
                    </Grid>
                </Grid> 
        )
    }
}

const mapStateToProps = (state) => {
    var favM = [
        { title: 'Avengers1', genres: ["Drama", "Action"], imdbRating: 3.1, year: 2020, localRating: 5, imageUrl: "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
        { title: 'Avengers2', genres: ["Drama", "Action"], imdbRating: 3.1, year: 2020, localRating: 5, imageUrl: "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
        { title: 'Avengers3', genres: ["Drama", "Action"], imdbRating: 3.1, year: 2020, localRating: 5, imageUrl: "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
        { title: 'Avengers4', genres: ["Drama", "Action"], imdbRating: 3.1, year: 2020, localRating: 5, imageUrl: "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
        { title: 'Avengers5', genres: ["Drama", "Action"], imdbRating: 3.1, year: 2020, localRating: 5, imageUrl: "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
        { title: 'Avengers6', genres: ["Drama", "Action"], imdbRating: 3.1, year: 2020, localRating: 5, imageUrl: "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
        { title: 'Avengers7', genres: ["Drama", "Action"], imdbRating: 3.1, year: 2020, localRating: 5, imageUrl: "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
    ];
    return {
        // favoriteMovies: state.profile.favoriteMovies,
        favoriteMovies: favM,
        profileData: state.profile.profile,
        userId: state.auth.user.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (userId) => dispatch(fetchProfile(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)