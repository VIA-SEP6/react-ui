import {Component} from "react";
import {connect} from "react-redux";
import {fetchProfile} from "../store/actions";

class Profile extends Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.currentUser.uid)
    }

    render() {
        return (
            <div>
                <p>This will be a profile page</p>
                <p>Current User: {this.props.currentUser.email}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.user,
        userProfile: state.profile.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (uuid) => dispatch(fetchProfile(uuid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)