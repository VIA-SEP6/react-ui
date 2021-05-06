import ImageDetails from "../ImageDetails";
import {makeStyles} from "@material-ui/core/styles";
import {GridList, Icon, IconButton} from "@material-ui/core";
import HorizontalLine from "../../Layout/Seperator/HorizontalLine";
import React, {createRef, useState} from "react";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center"
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
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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

export default function SimilarMovies(props) {
    const [ref, setRef] = useState(createRef())

    const classes = useStyles()
    const history = useHistory()

    const similar = props.movie.similar.results


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

    const openMovieDetails = (id) => {
        history.push("/movie/" + id)
    }

    return (
        <div className={classes.root}>
            <HorizontalLine/>
            <h3>People have also seen</h3>
            <div className={classes.content}>
                <IconButton className={classes.navIcon} color="primary" onClick={scrollLeft}>
                    <Icon className={classes.backIconRotate} >
                        arrow_forward_ios
                    </Icon>
                </IconButton>
                <GridList className={classes.gridList} cols={2.5} ref={(reference) => setRef(reference)}>
                    {similar.map((movie) => (
                        <ImageDetails
                            key={movie.id}
                            imgSrc={process.env.REACT_APP_TMDB_IMG_API_BASE + movie.poster_path}
                            title={movie.title}
                            onClick={() => openMovieDetails(movie.id)}
                        />
                    ))}
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