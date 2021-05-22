import {makeStyles} from "@material-ui/core";
import ScrollButton from "../Movie/Credits/ScrollButton";
import React, {createRef, useEffect, useState} from "react";
import {Icon} from "@material-ui/core";
import MovieCard from "./MovieCard"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: 22,
        textAlign: "center",
        alignItems: "center",
    },
    movies: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flexWrap: 'nowrap',
    },
    title: {
        paddingBottom: 25
    },
}))

const ProfileData = (props) => {
    const {favoriteMovies} = props
    const classes = useStyles()

    const getGridListCols = () => {  
        if (isWidthUp('lg', props.width)) {
          return 5;
        }
    
        if (isWidthUp('md', props.width)) {
          return 3;
        }
        
        if (isWidthUp('sm', props.width)) {
            return 2;
        }
    
        return 1;
      }

    return (
        <div className={classes.content}>
            <div className={classes.title}>Favorite Movies</div>
            <div className={classes.movies}>
                <GridList cellHeight={350}  spacing={2} cols={getGridListCols()}>
                {favoriteMovies.map((favMovie) => (
                    <GridListTile className={classes.tile} >
                        <MovieCard className={classes.tile} favoriteMovie={favMovie}></MovieCard>
                    </GridListTile>
                ))}
                </GridList>
            </div>
        </div>
    )
}

export default withWidth()(ProfileData)