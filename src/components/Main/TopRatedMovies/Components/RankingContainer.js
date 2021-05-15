import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import RankingCard from "./RankingCard";
import React from "react";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {},
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default function RankingContainer(props) {
    const classes = useStyles()
    const history = useHistory()

    const {movies} = props


    const openMovieDetails = (movieId) => {
        history.push(`/movie/${movieId}`)
    }

    return (
        <Grid container className={classes.root} justify="center" alignItems="center">
            {movies.map((movie, index) => (
                <Grid item xs={12} md={4} className={classes.card} key={movie.id}>
                    <RankingCard
                        onClick={() => openMovieDetails(movie.id)}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        rank={index + 1}
                        rating={movie.vote_average}
                        ratingsCount={movie.vote_count}
                        imgSrc={movie.poster_path}
                    />
                </Grid>
            ))}
        </Grid>
    )
}