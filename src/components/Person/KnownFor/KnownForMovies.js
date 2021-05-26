import ImageDetails from "../../Movie/ImageDetails";
import React from "react";
import HorizontalScroll from "../../Layout/HorizontalScroll/HorizontalScroll";
import {useHistory} from "react-router-dom";

export default function KnownForMovies(props) {
    const history = useHistory()

    const {movies} = props

    const openMovieDetails = (id) => {
        history.push("/movie/" + id)
    }

    return (
        <HorizontalScroll title="Known for">
            {Object.values(
                movies.reduce((acc, value) => {acc[value.id] = value; return acc}, {})
            ).map((movie) => (
                <ImageDetails
                    key={movie.id}
                    imgSrc={movie.poster_path}
                    title={movie.title}
                    onClick={() => openMovieDetails(movie.id)}
                />
            ))}
        </HorizontalScroll>
    )
}