import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.tertiary.main
    },
    backdrop: {
        width: '100%',
        height: '350px',
        objectFit: "cover",
    }
}))

export default function MovieDetails(props) {
    const {movie} = props;
    const classes = useStyles()

    const getImage = () => {
        console.log(movie)
        return `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` || "https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG"
    }

    return (
        <Card elevation={3} className={classes.root}>
            <CardMedia
                className={classes.backdrop}
                image={getImage()}
                title="Movie Backdrop"
            />
            <CardHeader title={movie.title}/>
            <CardContent>
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
            </CardContent>
        </Card>
    )
}