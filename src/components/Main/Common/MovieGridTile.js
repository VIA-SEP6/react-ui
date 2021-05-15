import {makeStyles} from "@material-ui/core/styles";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {Icon} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import GridListTile from "@material-ui/core/GridListTile";
import React from "react";
import {useHistory} from "react-router-dom";
import {formatDate} from "../../../services/util/dateConverter";

const useStyles = makeStyles(theme => ({
    root: {},
    title: {
        color: "white",
        maxWidth: 220,
    },
    year: {
        marginRight: theme.spacing(2),
        fontSize: 12
    },
    titleBar: {
        color: "white",
        background: 'rgba(0, 0, 0, 0.3)',
    },
}));

export default function MovieGridTile(props) {
    const classes = useStyles()
    const history = useHistory();

    const {movie, style} = props

    const openMovieDetails = (movieId) => {
        history.push(`/movie/${movieId}`)
    }

    const getReleaseDate = (dateString) => {
        return formatDate(new Date(dateString))
    }

    return (
        <GridListTile key={movie.id} style={{...style}}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            <GridListTileBar
                title={movie.title}
                subtitle={getReleaseDate(movie.release_date)}
                classes={{
                    root: classes.titleBar,
                    title: classes.title,
                }}
                actionIcon={
                    <IconButton aria-label={`star ${movie.title}`} onClick={() => openMovieDetails(movie.id)}>
                        <Icon className={classes.title}>info-outlined</Icon>
                    </IconButton>
                }
            />
        </GridListTile>
    )
}