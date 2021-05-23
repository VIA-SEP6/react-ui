import {Badge, Grid, Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, withStyles} from "@material-ui/core";
import React from "react";
import CustomModal from "../Modal/CustomModal";
import Login from "../../Auth/Login/Login";
import {useHistory} from "react-router-dom";
import UserAvatar from "../../User/UserAvatar";

const StyledMenu = withStyles(theme => ({
    paper: {
        border: '1px solid',
        borderColor: theme.palette.primary.main
    },
}))((props) => (
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
    const history = useHistory();

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

    const navigateToProfile = () => {
        handleClose()
        history.push("/profile")
    }

    const navigateToSettings = () => {
        handleClose()
        history.push("/settings")
    }

    const menuItems = [
        {text: "Profile", icon: "person", onClickFunction: navigateToProfile},
        {text: "Settings", icon: "settings", onClickFunction: navigateToSettings},
        {text: "Sign Out", icon: "logout", onClickFunction: handleLogout},
    ]

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
            <Grid container alignItems="center">
                <IconButton>
                    <Badge color="primary" overlap="circle" variant="dot">
                        <Icon>notifications</Icon>
                    </Badge>
                </IconButton>
                <UserAvatar
                    src={props.currentUser.photoURL}
                    onClick={handleClick}
                />
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {menuItems.map(menuItem => (
                        <MenuItem key={menuItem.text} onClick={menuItem.onClickFunction}>
                            <ListItemIcon>
                                <Icon>{menuItem.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={menuItem.text}/>
                        </MenuItem>
                    ))}
                </StyledMenu>
            </Grid>
        )
    }

    return (
        <div>
            {userData}
        </div>
    )
}