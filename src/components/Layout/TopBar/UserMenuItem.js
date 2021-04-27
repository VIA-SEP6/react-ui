import {Avatar, Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, withStyles} from "@material-ui/core";
import React from "react";
import CustomModal from "../Modal/CustomModal";
import Login from "../../Auth/Login/Login";
import {makeStyles} from "@material-ui/core/styles";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    avatarSmall: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}))

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export default function UserMenuItem(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose()
        props.logoutUser()
    }

    let userData = (
        <CustomModal toggle={<IconButton><Icon>login</Icon></IconButton>}>
            <Login loginUser={props.loginUser}
                   loginWithGoogle={props.loginWithGoogle}
                   registerUser={props.registerUser}
            />
        </CustomModal>
    )

    if (props.isAuthenticated) {
        userData = (
            <div>
                <IconButton
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    <Avatar className={classes.avatarSmall} alt="Profile Avatar" src={props.currentUser.photoURL}/>
                </IconButton>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <Icon>person</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Icon>logout</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Sign Out"/>
                    </MenuItem>
                </StyledMenu>
            </div>
        )
    }

    return (
        <div>
            {userData}
        </div>
    )
}