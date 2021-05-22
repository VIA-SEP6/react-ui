import ImageDetails from "../ImageDetails";
import React from "react";
import {useHistory} from "react-router-dom";
import HorizontalScroll from "../../Layout/HorizontalScroll/HorizontalScroll";

export default function SimilarMovies(props) {
    const history = useHistory()

    const similar = props.movie.recommendations.results

    const openMovieDetails = (id) => {
        history.push("/movie/" + id)
    }

    return (
        <HorizontalScroll title="People have also seen">
            {similar.map((movie) => (
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