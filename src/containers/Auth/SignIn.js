import {Component} from "react";
import {connect} from "react-redux";
import Login from "../../components/Auth/Login";
import {loginUser} from '../../store/actions'

class SignIn extends Component {
    render() {
        return (
            <div>
                <Login loginUser={this.props.loginUser}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)