import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {Button, Grid, Icon, IconButton} from "@material-ui/core";
import MovieRating from "./MovieRating";

const useStyles = makeStyles(theme => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowAlign: {
        justifyContent: "center",
        alignItems: "center"
    },
    ratings: {
        justifyContent: "space-between",
        padding: theme.spacing(1, 1),
    },
    movieDetails: {
        padding: theme.spacing(0, 2),
        width: "100%"
    },
    movieTitle: {
        fontSize: 24,
        textAlign: "left"
    },
    releaseYear: {
        margin: theme.spacing(1, 0),
        fontWeight: 300,
        fontSize: 16,
        fontStyle: "italic",
        textAlign: "left",
    },
    description: {
        fontWeight: 300,
        fontSize: 12,
        textAlign: "justify"
    },
    genres: {
        fontWeight: 300,
        fontSize: 12,
        fontStyle: "italic",
    },
    showReviews: {
        marginLeft: "auto"
    }
}))

export default function MovieDetails(props) {
    const classes = useStyles()

    const {movie} = props

    const getImage = (imagePath) => {
        if (imagePath)
            return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        return "https://ngmintlsubs.nationalgeographic.com/Solo/Content/Images/noCover.gif"
    }

    const content = (
        <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={4}>
                <img width="100%" src={getImage(movie.poster_path)} alt="Movie Poster"/>
                <div className={[classes.row, classes.ratings].join(' ')}>
                    <MovieRating rating={movie.vote_average}
                                 iconSrc="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                    <MovieRating rating={movie.vote_average}
                                 iconSrc="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                </div>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Grid container direction="row">
                    <Grid item container xs={10} alignItems="center">
                        <div className={classes.movieTitle}>{movie.original_title}</div>
                    </Grid>
                    <Grid item container xs={2} alignItems="center">
                        <Grid container justify="flex-end" alignItems="center">
                            <IconButton>
                                <Icon>favorite_border</Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.releaseYear}>{new Date(movie.release_date).getFullYear()}</div>
                    </Grid>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item xs={8} sm={8}>
                            <div className={classes.genres}>{movie.genres.map(genre => genre.name).join(", ")}</div>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Button className={classes.showReviews} color="primary">Write Review</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.description}>{movie.overview}</div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

    return (
        <div>
            {content}
        </div>
    )
}