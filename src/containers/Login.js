import {Component} from "react";
import {connect} from "react-redux";
import LoginComponent from "../components/Auth/LoginComponent";

class Login extends Component {
    render() {
        return (
            <div>
                <p>Hello Login</p>
                <p>{process.env.REACT_APP_API_BASE_PATH}</p>
                <p>Is authenticated? {this.props.isAuthenticated ? "Yes" : "No"}</p>
                <LoginComponent/>
            </div>
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