import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {CardActions} from "@material-ui/core";
import MovieRating from "./MovieRating";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        borderRadius: "0px !important",
        width: "100%",
        fontWeight: 300,
        fontSize: 14,
        borderBottom: '1px solid #d5d5d5',
        cursor: "pointer",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginRight: theme.spacing(1),
        "& .MuiCardContent-root": {
            padding: theme.spacing(1)
        },
        "& p": {
            margin: 0
        }
    },
    cardContentRoot: {
        flex: '1 0 auto',
        paddingBottom: 0
    },
    cover: {
        minWidth: '100px',
        width: '100px',
        height: "150px",
    },
    rating: {
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
    },
    overview: {
        fontSize: 10,
        fontWeight: 300,
        textAlign: "justify",
        overflow: "hidden",
        padding: theme.spacing(0.5, 0.5, 0, 0.5)
    }
}));


export default function MovieSearchDetails(props) {
    const classes = useStyles();
    const history = useHistory();

    const {movie} = props

    const getImage = () => {
        if (movie.poster_path)
            return movie.poster_path
        return "https://ngmintlsubs.nationalgeographic.com/Solo/Content/Images/noCover.gif"
    }

    const handleClick = () => {
        history.push(`/movie/${movie.id}`)
    }

    return (
        <Card elevation={0} className={classes.root} onClick={handleClick}>
            <CardMedia
                className={classes.cover}
                image={getImage()}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent classes={{root: classes.cardContentRoot}} style={{paddingBottom: 0}}>
                    <p>{movie.title}</p>
                    <div className={classes.overview}>{movie.overview.slice(0, 550)} ...</div>
                </CardContent>
                <CardActions className={classes.rating} style={{paddingTop: 0}}>
                    <MovieRating rating={movie.tma_vote_average.avgRating}
                                 icon="star"/>
                    <MovieRating rating={movie.vote_average}
                                 iconSrc="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                </CardActions>
            </div>
        </Card>
    );
}