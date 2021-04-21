import {Component} from "react";
import {logoutUser} from "../../store/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class SignOut extends Component {
    componentDidMount() {
        this.props.logoutUser();
    }

    render() {
        return <Redirect to="/"/>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(SignOut)