import {Component} from "react";
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";
import {fetchProfile} from "../store/actions";
import ProfileData from "../components/Profile/ProfileData"
import FavoriteMovies from "../components/Profile/FavoriteMovies"

class Profile extends Component {
    componentDidMount() {
        this.props.getUserProfile()
    }

    render() {
        return (
                <Grid container spacing={2} >
                    <Grid item  sm={4} lg={2}>
                        <ProfileData profileData={this.props.profileData}/>
                    </Grid>
                    <Grid item  sm={8} lg={10}>
                        <FavoriteMovies refreshProfile={this.props.getUserProfile} favoriteMovies={this.props.favoriteMovies}/>
                    </Grid>
                </Grid> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.profile.profile.favouriteMovies || [],
        profileData: state.profile.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => dispatch(fetchProfile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)