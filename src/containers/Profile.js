import { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { fetchProfile } from "../store/actions";
import ProfileData from "../components/Profile/ProfileData"
import FavoriteMovies from "../components/Profile/FavoriteMovies"
import Spinner from "../components/Layout/Loader/Spinner";

class Profile extends Component {
    init() {
        this.props.getUserProfile(this.getSelectedProfileId())
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate = (prevProps) => {
        if (this.getSelectedProfileId() !== prevProps.match.params.id) {
            this.init()
        }
    };

    getSelectedProfileId() {
        return this.props.match.params.id
    }

    render() {
        if (this.props.profileLoading)
            return (
                <Spinner />
            )
        else
            return (
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={4} lg={3}>
                        <ProfileData profileData={this.props.profileData} />
                    </Grid>
                    <Grid item xs={12} sm={8} lg={9}>
                        <FavoriteMovies refreshProfile={this.props.getUserProfile}
                            favoriteMovies={this.props.favoriteMovies}
                            myProfile={this.getSelectedProfileId() === this.props.currentUser} />
                    </Grid>
                </Grid>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.profile.profile.favouriteMovies || [],
        profileData: state.profile.profile,
        currentUser: state.auth.user.uid,
        profileLoading: state.profile.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (userId) => dispatch(fetchProfile(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)