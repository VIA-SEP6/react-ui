import {makeStyles} from "@material-ui/core/styles";
import {Badge, Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, withStyles} from "@material-ui/core";
import React from "react";
import UserAvatar from "../UserAvatar";
import Notification from "./Notification";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

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
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export default function NotificationsMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <IconButton onClick={handleClick}>
                <Badge color="primary" overlap="circle" variant="dot">
                    <Icon>notifications</Icon>
                </Badge>
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Notification/>
            </StyledMenu>
        </div>
    )
}