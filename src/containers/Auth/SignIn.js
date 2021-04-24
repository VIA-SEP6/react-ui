import {Component} from "react";
import {connect} from "react-redux";
import Login from "../../components/Auth/Login";
import {loginUser, logInWithGoogle} from '../../store/actions'

class SignIn extends Component {
    render() {
        return (
            <div>
                <Login loginUser={this.props.loginUser} loginWithGoogle={this.props.loginWithGoogle}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password)),
        loginWithGoogle: () => dispatch(logInWithGoogle())
    }
}

export default connect(null, mapDispatchToProps)(SignIn)