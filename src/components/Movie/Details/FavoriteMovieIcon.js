import {makeStyles} from "@material-ui/core/styles";
import {Icon, IconButton} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import firestoreReferenceService from "../../../services/firebase/firestore/references";
import movieApiService from "../../../services/firebase/api/movie";

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function FavoriteMovieIcon(props) {
    const [isFavorite, setIsFavorite] = useState(false)
    const classes = useStyles()

    const {movie, currentUser} = props

    const handleClick = () => {
        if (isFavorite)
            movieApiService.removeMovieFromFavourites(`${movie.id}`, currentUser.uid)
        else
            movieApiService.addMovieToFavourites(`${movie.id}`, currentUser.uid)
    }

    const favoriteIcon = (
        <IconButton color="primary" onClick={handleClick}>
            <Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>
        </IconButton>
    )

    useEffect(() => {
        firestoreReferenceService
            .getFavoriteMoviesByUserIdReference(currentUser.uid)
            .onSnapshot(
                docSnapshot => {
                    const favouriteMovies = docSnapshot.data().favouriteMovies || [];
                    setIsFavorite(favouriteMovies.includes(`${movie.id}`))
                },
                error => {
                    console.log(`Encountered error: ${error}`);
                })
    }, [setIsFavorite])

    return (
        <div className={classes.root}>
            {favoriteIcon}
        </div>
    )
}