import {Component} from "react";
import {connect} from "react-redux";
import LoginComponent from "../components/Auth/LoginComponent";
import {registerUser, loginUser, logoutUser} from '../store/actions/index'

class Login extends Component {
    render() {
        return (
            <div>
                <p>Hello Login</p>
                <p>{process.env.REACT_APP_API_BASE_PATH}</p>
                <p>Is authenticated? {this.props.isAuthenticated ? "Yes" : "No"}</p>
                <p>{this.props.userEmail}</p>
                <LoginComponent loginUser = {this.props.loginUser} logoutUser = {this.props.logoutUser} registerUser = {this.props.registerUser}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user !== null,
        userEmail: state.auth.user ? state.auth.user.user.email : "no user logged"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password)),
        registerUser: (email, password) => dispatch(registerUser(email, password)),
        logoutUser: (email, password) => dispatch(logoutUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)