import {Component} from "react";
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";
import {fetchProfile, uploadImage, updatePassword, updateInfo} from "../store/actions";
import BigAvatar from "../components/Profile/BigAvatar"
import SettingsFields from "../components/Profile/SettingsFields"
import ImageUploader from "../components/Profile/ImageUploader"
import TextField from '@material-ui/core/TextField';
import { TextFields } from "@material-ui/icons";

class Settings extends Component {

    componentDidMount() {
        this.props.getUserProfile()
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <div style={{fontSize: "24px"}}> {this.props.profileData.userName}</div>
                <div style={{fontSize: "16px", color: "#828282"}}> {this.props.profileData.email}</div>
                <div><BigAvatar src={this.props.profileData.profilePhotoUrl}/></div>
                <div><ImageUploader handleFile={this.props.uploadImage}/></div>
                <div><SettingsFields profileData={this.props.profileData} updatePassword={this.props.updatePassword} updateInfo={this.props.updateInfo}/></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profile.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => dispatch(fetchProfile()),
        uploadImage: (imageObject) => dispatch(uploadImage(imageObject)),
        updatePassword: (passwordObject) => dispatch(updatePassword(passwordObject)),
        updateInfo: (infoObject) => dispatch(updateInfo(infoObject)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)