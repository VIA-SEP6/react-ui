import {Component} from "react";
import {connect} from "react-redux";

class Login extends Component {
    render() {
        return (
            <div>Hello Login</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)