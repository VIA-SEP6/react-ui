import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {CardActions} from "@material-ui/core";
import MovieRating from "./MovieRating";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        borderRadius: "0px !important",
        width: "100%",
        fontWeight: 300,
        fontSize: 14,
        borderBottom: '1px solid #d5d5d5',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        "& .MuiCardContent-root": {
            padding: theme.spacing(1)
        },
        "& p": {
            margin: 0
        }
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        minWidth: '100px',
        width: '100px',
        height: "150px",
    },
    rating: {
        justifyContent: "end",
        alignItems: "center",
        fontSize: 12,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    overview: {
        fontSize: 10,
        fontWeight: 300,
        textAlign: "justify",
        overflow: "hidden",
        padding: theme.spacing(0.5, 1, 0, 1)
    }
}));


export default function MovieSearchDetails(props) {
    const classes = useStyles();

    const {movie} = props

    const getImage = () => {
        if (movie.poster_path)
            return process.env.REACT_APP_TMDB_IMG_API_BASE + movie.poster_path
        return "https://ngmintlsubs.nationalgeographic.com/Solo/Content/Images/noCover.gif"
    }

    return (
        <Card elevation={0} className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={getImage()}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <p>{movie.title}</p>
                    <div className={classes.overview}>{movie.overview.slice(0, 260)} ...</div>
                </CardContent>
                <CardActions className={classes.rating}>
                    <MovieRating rating={movie.vote_average}
                                 iconSrc="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                </CardActions>
            </div>
        </Card>
    );
}