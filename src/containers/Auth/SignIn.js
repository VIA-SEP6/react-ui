import {Component} from "react";
import {connect} from "react-redux";
import Login from "../../components/Auth/Login";
import {loginUser, registerUser} from '../../store/actions'

class SignIn extends Component {
    render() {
        return (
            <div>
                <Login loginUser={this.props.loginUser}
                       registerUser={this.props.registerUser}/>
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
        registerUser: (email, password) => dispatch(registerUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)