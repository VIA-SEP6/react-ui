import {Component} from "react";
import {connect} from "react-redux";

class Profile extends Component {
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
        currentUser: state.auth.user
    }
}

export default connect(mapStateToProps, null)(Profile)