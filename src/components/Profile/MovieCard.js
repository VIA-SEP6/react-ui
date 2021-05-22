import {makeStyles, Grid} from "@material-ui/core";
import {IconButton, Avatar} from '@material-ui/core';
import MovieRating from "../Movie/MovieRating"
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: 10,
        textAlign: "center",
        alignItems: "center",
        maxWidth: 185,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        maxWidth: 185
    },
    genre: {
        verticalAlign: "bottom",
        color: theme.palette.gray.main
    },
    number: {
        color: "black",
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    title: {
        fontSize: 15,
        paddingBottom: 15,
        fontWeight: "bold"
    },
    icon: {
        padding: 0
    },
    year: {
        fontSize: 20,
        color: theme.palette.gray.darker
    },
    imdbRating: {
        float: "left"
    },
    localRating: {
        alignItems: "right"
    }
}))

export default function ProfileData(props) {
    const {favoriteMovie} = props
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <Grid container direction="column">
                <Grid container sx={4}>
                    <Grid container direction="row">
                        <Grid item xs={2}>
                            <Avatar className={classes.number}>1</Avatar>
                        </Grid>
                        <Grid container direction="column" xs={8}>
                            <Grid item>
                                <div className={classes.title}>{favoriteMovie.title}</div>
                            </Grid>
                            <Grid item>
                                <div className={classes.genre}>Action, Drama, farsedata</div>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton className={classes.icon} >
                                <DeleteIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row">
                        <Grid item xs={4}>
                            <MovieRating className={classes.imdbRating} rating={favoriteMovie.imdbRating} 
                            icon="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.year}>{favoriteMovie.year}</div>
                        </Grid>
                        <Grid item xs={4}>
                            <MovieRating className={classes.localRating} rating={favoriteMovie.localRating} 
                            icon="star"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={8}>
                    <img className={classes.image} src={favoriteMovie.imageUrl} alt="Movie"/>
                </Grid>
            </Grid>
        </div>
    )
}