import {makeStyles} from "@material-ui/core/styles";
import {Badge, Button, Grid, Icon, IconButton, Menu, Typography, withStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import firestoreReferenceService from "../../../services/firebase/firestore/references";
import Notification from "./Notification";
import notificationApiService from "../../../services/firebase/api/notifications";

const useStyles = makeStyles(theme => ({
    root: {},
    menuItemRoot: {
        width: 350,
        padding: theme.spacing(1)
    },
    date: {
        textAlign: "right",
    },
    actions: {
        padding: theme.spacing(0, 2)
    }
}));

const StyledMenu = withStyles(theme => ({
    paper: {
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        height: 400,
        width: 350,
        overflow: "hidden",
        position: "relative"
    },
    list: {
        position: "absolute",
        width: "360px !important",
        top: 0,
        left: 0,
        bottom: -20,
        right: -20,
        overflow: "scroll"
    }
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
            horizontal: 'left',
        }}
        {...props}
    />
));

export default function NotificationsMenu(props) {
    const [notifications, setNotifications] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);

    const {userId} = props

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClearAllNotifications = () => {
        notificationApiService.clearAllNotifications()
    }

    const handleClearNotification = (notificationId) => {
        notificationApiService.clearNotification(notificationId)
    }

    const getUnreadNotificationsLength = () => {
        return notifications.filter(notification => notification.read === false).length
    }

    const classes = useStyles()

    useEffect(() => {
        firestoreReferenceService
            .getNotificationsForTheUserReference(userId)
            .onSnapshot(
                snapshot => {
                    setNotifications([])
                    snapshot.forEach(document => {
                        if (document.exists) {
                            const notificationObject = {
                                id: document.id, ...document.data(),
                            }
                            setNotifications(notifications => [...notifications, notificationObject])
                        }
                    })
                },
                error => {
                    console.log(error.message)
                })
    }, [setNotifications, userId])

    const notificationsList = (
        notifications.length === 0
            ? (
                <Grid item>
                    <Typography component="span" variant="body2">You have none notifications yet</Typography>
                </Grid>
            )
            : (
                <Grid item>
                    {
                        notifications.map(notification => (
                            <Notification key={notification.id} notification={notification} onClick={handleClearNotification}/>
                        ))

                    }
                </Grid>
            )
    )

    const badgeProps = getUnreadNotificationsLength() === 0
        ? {}
        : {variant: "dot"}

    return (
        <div className={classes.root}>
            <IconButton onClick={handleClick}>
                <Badge color="primary" overlap="circle" {...badgeProps}>
                    <Icon>{getUnreadNotificationsLength() === 0 ? "notifications_none" : "notifications"} </Icon>
                </Badge>
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Grid style={{width: '350px'}} container justify="center" alignItems="center">
                    <Grid className={classes.actions} container justify="space-between" alignItems="center">
                        <Typography component="span" variant="caption">
                            You have {getUnreadNotificationsLength()} new notifications
                        </Typography>
                        <Button onClick={handleClearAllNotifications} size="small" color="primary">Clear All</Button>
                    </Grid>
                    {notificationsList}
                </Grid>
            </StyledMenu>
        </div>
    )
}