import { Grid, IconButton, makeStyles, useTheme } from "@material-ui/core";
import MovieRating from "../Movie/MovieRating"
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";
import Rank from "../Main/Common/Rank";

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: 10,
        textAlign: "center",
    },
    image: {
        width: "100%",
        cursor: "pointer",
        marginTop: theme.spacing(0.5),
    },
    genre: {
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
        fontWeight: 400,
        overflow: "hidden",
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 2,
        wordBreak: "break-all",
        height: 26
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
    },
    reviews: {
        padding: theme.spacing(0, 0.5)
    }
}))

export default function MovieCard(props) {
    const { favoriteMovie, number, removeFavorite, myProfile } = props
    const classes = useStyles()
    const history = useHistory();
    const theme = useTheme()


    const moveToMovie = () => {
        history.push(`/movie/${favoriteMovie.id}`)
    }

    return (
        <div className={classes.content}>
            <Grid container direction="column">
                <Grid item container sx={4}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={2}>
                            <Rank size="medium" style={{ margin: 0 }}>{number}</Rank>
                        </Grid>
                        <Grid item xs={8}>
                            <div className={classes.title}>{favoriteMovie.title}</div>
                        </Grid>
                        <Grid item xs={2}>
                            {!myProfile ? null :
                            <IconButton onClick={() => removeFavorite(favoriteMovie.id)} className={classes.icon}>
                                <DeleteIcon />
                            </IconButton>}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.genre}>
                        {favoriteMovie.genres.slice(0, 3).map(genre => genre.name).join(", ")}
                    </Grid>
                    <Grid className={classes.reviews} item container>
                        <Grid item xs={4}>
                            <MovieRating className={classes.imdbRating} rating={favoriteMovie.vote_average}
                                icon="star" color={theme.palette.yellow.main} />
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.year}>{favoriteMovie.release_date.substring(0, 4)}</div>
                        </Grid>
                        <Grid item xs={4} >
                            <MovieRating className={classes.localRating} rating={favoriteMovie.tma_vote_average}
                                icon="star" style={{ justifyContent: "end" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={8}>
                    <img className={classes.image} src={favoriteMovie.poster_path} onClick={moveToMovie} alt="Movie" />
                </Grid>
            </Grid>
        </div>
    )
}