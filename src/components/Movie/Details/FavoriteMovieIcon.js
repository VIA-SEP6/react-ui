import {makeStyles} from "@material-ui/core/styles";
import {Icon, IconButton} from "@material-ui/core";
import React, {useState} from "react";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function FavoriteMovieIcon(props) {
    const [isFavorite, setIsFavorite] = useState(false)
    const classes = useStyles()

    const {movie, currentUser} = props

    const favoriteIcon = (
        <IconButton color="primary">
            <Icon>favorite_border</Icon>
        </IconButton>
    )

    return (
        {favoriteIcon}
    )
}