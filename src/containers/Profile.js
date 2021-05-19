import {Component} from "react";
import {connect} from "react-redux";
import {fetchProfile} from "../store/actions";

class Profile extends Component {
    componentDidMount() {
        this.props.getUserProfile()
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => dispatch(fetchProfile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)