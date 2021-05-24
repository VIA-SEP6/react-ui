import {makeStyles, Grid, useTheme} from "@material-ui/core";
import {IconButton, Avatar} from '@material-ui/core';
import MovieRating from "../Movie/MovieRating"
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: 10,
        textAlign: "center",
        alignItems: "center",
        maxWidth: 185,
        justifyContent: "center",
    },
    image: {
        width: "100%",
        maxWidth: 185,
        cursor: "pointer"
    },
    genre: {
        paddingTop: 15,
        verticalAlign: "bottom",
        color: theme.palette.gray.main
    },
    number: {
        color: "black",
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 2,
        wordBreak: "break-all",
        overflow: "hidden",
        height: 25
    },
    icon: {
        padding: 0
    },
    year: {
        fontSize: 15,
        color: theme.palette.gray.darker,
        paddingTop: 7
    },
    imdbRating: {
        float: "left",
        fill: "#fff"
    },
    localRating: {
        alignItems: "right",
    }
}))

export default function MovieCard(props) {
    const {favoriteMovie, number, removeFavorite} = props
    const classes = useStyles()
    const history = useHistory();
    const theme = useTheme()

    const moveToMovie = () => {
        history.push(`/movie/${favoriteMovie.id}`)
    }

    return (
        <div className={classes.content}>
            <Grid container direction="column">
                <Grid container sx={4}>
                    <Grid container direction="row">
                        <Grid item xs={2}>
                            <Avatar className={classes.number}><span>{number}</span></Avatar>
                        </Grid>
                        <Grid container direction="column" xs={8}>
                            <Grid item>
                                <div className={classes.title}>{favoriteMovie.title}</div>
                            </Grid>
                            <Grid item>
                                <div className={classes.genre}>{favoriteMovie.genres.slice(0, 3).map(genre => genre.name).join(", ")}</div>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={() => removeFavorite(favoriteMovie.id)} className={classes.icon} >
                                <DeleteIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row">
                        <Grid item xs={4}>
                            <MovieRating className={classes.imdbRating} rating={favoriteMovie.vote_average} 
                            icon="star" color={theme.palette.tertiary.main}/>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.year}>{favoriteMovie.release_date.substring(0,4)}</div>
                        </Grid>
                        <Grid item xs={4}>
                            <MovieRating className={classes.localRating} rating={favoriteMovie.tma_vote_average}
                            icon="star"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={8}>
                    <img className={classes.image} src={favoriteMovie.poster_path} onClick={moveToMovie} alt="Movie"/>
                </Grid>
            </Grid>
        </div>
    )
}