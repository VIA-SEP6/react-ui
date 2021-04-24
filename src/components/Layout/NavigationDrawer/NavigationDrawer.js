import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import React, {useState} from "react";
import clsx from 'clsx';
import {IconButton} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NavItems from "../Navigation/NavItems";
import CustomModal from "../Modal/CustomModal";
import Login from "../../Auth/Login/Login";
import NavItem from "../Navigation/NavItem";

const drawerWidth = 240;
const drawerWidthClosed = 64;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        backgroundColor: theme.palette.primary.main,
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: drawerWidthClosed,
    },
    toggle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        '& span': {
            color: 'white'
        }
    },
    userData: {
        marginTop: "auto",
        marginBottom: theme.spacing(1)
    }
}));


export default function NavigationDrawer(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    let userData = (
        <CustomModal
            content={<Login loginUser={props.loginUser}
                            loginWithGoogle={props.loginWithGoogle}/>}
            toggle={<NavItem key="Login" header="Login" icon="login"/>}
        />
    )

    if (props.isAuthenticated) {
        userData = (<p>User</p>)
    }

    return (
        <Drawer
            variant="permanent"
            anchor="right"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}>
            <NavItems isOpen={open} isAuthenticated={props.isAuthenticated}/>
            <div className={classes.toggle}>
                <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                    {open ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <div className={classes.userData}>
                {userData}
            </div>
        </Drawer>
    )
}
