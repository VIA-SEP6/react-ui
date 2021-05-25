import {makeStyles} from "@material-ui/core/styles";
import {Icon, IconButton} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import firestoreReferenceService from "../../../services/firebase/firestore/references";
import {useDispatch} from "react-redux";
import {addToFavourites, removeFromFavourite} from "../../../store/actions";

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function FavoriteMovieIcon(props) {
    const [isFavorite, setIsFavorite] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()

    const {movie, currentUser} = props

    const handleClick = () => {
        if (isFavorite)
            dispatch(removeFromFavourite(`${movie.id}`))
        else
            dispatch(addToFavourites(`${movie.id}`))
    }

    const favoriteIcon = (
        <IconButton color="primary" onClick={handleClick}>
            <Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>
        </IconButton>
    )

    useEffect(() => {
        if (currentUser) {
            const unsub = firestoreReferenceService
                .getFavoriteMoviesByUserIdReference(currentUser.uid)
                .onSnapshot(
                    docSnapshot => {
                        if (docSnapshot.exists) {
                            const favouriteMovies = docSnapshot.data().favouriteMovies || [];
                            setIsFavorite(favouriteMovies.includes(`${movie.id}`))
                        }
                    },
                    error => {
                        console.log(`Encountered error: ${error}`);
                    })
            return () => unsub()
        }
    }, [setIsFavorite, currentUser, movie.id])

    return (
        <div className={classes.root}>
            {favoriteIcon}
        </div>
    )
}