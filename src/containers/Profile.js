import {Component} from "react";
import {connect} from "react-redux";
import {fetchProfile} from "../store/actions";
import {ProfileData} from "../components/Profile/ProfileData"
import {FavoriteMovies} from "../components/Profile/FavoriteMovies"

class Profile extends Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.currentUser.uid)
    }

    render() {
        return (
            <div>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12} md={3}>
                        <ProfileData profileData={this.props.profileData}/>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <FavoriteMovies userId={this.state.userId}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.user.uid,
        profileData: state.profile.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (uuid) => dispatch(fetchProfile(uuid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)