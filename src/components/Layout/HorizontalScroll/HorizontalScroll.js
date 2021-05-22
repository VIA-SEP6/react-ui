import {makeStyles} from "@material-ui/core/styles";
import {GridList, Icon, IconButton} from "@material-ui/core";
import HorizontalLine from "../../Layout/Seperator/HorizontalLine";
import React, {createRef, useState} from "react";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
        minWidth: "100%"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    navIcon: {
        height: 40,
        width: 40
    },
    gridList: {
        overflow: "hidden",
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    backIconRotate: {
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "-ms-transform": "rotate(180deg)",
        "-o-transform": " rotate(180deg)",
        transform: "rotate(180deg)",
    }
}))

export default function HorizontalScroll(props) {
    const [ref, setRef] = useState(createRef())

    const classes = useStyles()

    const {title, children} = props

    const scrollLeft = () => {
        ref.scrollBy({
            top: 0,
            left: - window.innerWidth / 3,
            behavior: 'smooth'
        })
    }

    const scrollRight = () => {
        ref.scrollBy({
            top: 0,
            left: window.innerWidth / 3,
            behavior: 'smooth'
        })
    }

    return (
        <div className={classes.root}>
            <HorizontalLine/>
            <h3>{title}</h3>
            <div className={classes.content}>
                <IconButton className={classes.navIcon} color="primary" onClick={scrollLeft}>
                    <Icon className={classes.backIconRotate} >
                        arrow_forward_ios
                    </Icon>
                </IconButton>
                <GridList className={classes.gridList} cols={2.5} ref={(reference) => setRef(reference)}>
                    {children}
                </GridList>
                <IconButton className={classes.navIcon} color="primary" onClick={scrollRight}>
                    <Icon>
                        arrow_forward_ios
                    </Icon>
                </IconButton>
            </div>
        </div>

    )
}