import {Component} from "react";
import {connect} from "react-redux";
import {fetchProfile, uploadImage, updatePassword, updateInfo} from "../store/actions";
import BigAvatar from "../components/Profile/BigAvatar"
import SettingsFields from "../components/Profile/SettingsFields"
import ImageUploader from "../components/Profile/ImageUploader"

class Settings extends Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.currentUser.uid)
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <div style={{fontSize: "24px"}}> {this.props.profileData.userName}</div>
                <div style={{fontSize: "16px", color: "#828282"}}> {this.props.profileData.email}</div>
                <div><BigAvatar src={this.props.profileData.profilePhotoUrl}/></div>
                <div><ImageUploader handleFile={(file) => this.props.uploadImage(this.props.currentUser.uid, file)}/></div>
                <div><SettingsFields profileData={this.props.profileData} updatePassword={this.props.updatePassword} updateInfo={this.props.updateInfo}/></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.user,
        profileData: state.profile.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (userId) => dispatch(fetchProfile(userId)),
        uploadImage: (userId, imageObject) => dispatch(uploadImage(userId, imageObject)),
        updatePassword: (passwordObject) => dispatch(updatePassword(passwordObject)),
        updateInfo: (infoObject) => dispatch(updateInfo(infoObject)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)