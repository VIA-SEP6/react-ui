import {Avatar, Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, withStyles} from "@material-ui/core";
import React from "react";
import CustomModal from "../Modal/CustomModal";
import Login from "../../Auth/Login/Login";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    avatarSmall: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        border: '1px solid',
        borderColor: theme.palette.primary.main
    },
}))

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
    const classes = useStyles();
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

    const menuItems = [
        {text: "Profile", icon: "person", onClickFunction: navigateToProfile},
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
                    {menuItems.map(menuItem => (
                        <MenuItem key={menuItem.text} onClick={menuItem.onClickFunction}>
                            <ListItemIcon>
                                <Icon>{menuItem.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={menuItem.text}/>
                        </MenuItem>
                    ))}
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