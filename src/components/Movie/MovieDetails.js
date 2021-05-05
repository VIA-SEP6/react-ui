import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {Button, Icon, IconButton} from "@material-ui/core";
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
    poster: {
        width: 180,
        height: 263
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
    },
    releaseYear: {
        margin: theme.spacing(1, 0),
        fontWeight: 300,
        fontSize: 16,
        fontStyle: "italic",
        textAlign: "left",
    },
    addToFavorite: {
        marginLeft: "auto",
        "& button": {
            padding: 0
        }
    },
    description: {
        height: 170,
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

    return (
        <div className={[classes.row].join(' ')}>
            <div className={[classes.column].join(' ')}>
                <img src={getImage(movie.poster_path)} className={classes.poster} alt="Movie Poster"/>
                <div className={[classes.row, classes.ratings].join(' ')}>
                    <MovieRating rating={movie.vote_average}
                                 iconSrc="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                    <MovieRating rating={movie.vote_average}
                                 iconSrc="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                </div>
            </div>
            <div className={[classes.column, classes.movieDetails].join(' ')}>
                <div className={[classes.row, classes.rowAlign].join(' ')}>
                    <div className={classes.movieTitle}>{movie.original_title}</div>
                    <div className={classes.addToFavorite}>
                        <IconButton>
                            <Icon>favorite_border</Icon>
                        </IconButton>
                    </div>
                </div>
                <div className={classes.releaseYear}>{new Date(movie.release_date).getFullYear()}</div>
                <div className={classes.description}>{movie.overview}</div>
                <div className={[classes.row, classes.rowAlign].join(' ')}>
                    <div className={classes.genres}>{movie.genres.map(genre => genre.name).join(", ")}</div>
                    <Button className={classes.showReviews} color="primary">Write Review</Button>
                </div>
            </div>
        </div>
    )
}