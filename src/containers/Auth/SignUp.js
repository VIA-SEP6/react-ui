import {Component} from "react";
import Register from "../../components/Auth/Register";
import {registerUser} from "../../store/actions";
import {connect} from "react-redux";

class SignUp extends Component {
    render() {
        return (
            <div>
                <Register registerUser={this.props.registerUser}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (newUserObject) => dispatch(registerUser(newUserObject))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)