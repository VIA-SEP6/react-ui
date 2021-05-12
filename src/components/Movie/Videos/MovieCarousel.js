import Carousel from "react-material-ui-carousel";
import {makeStyles} from "@material-ui/core/styles";
import {Icon} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        paddingBottom: "56.25%"
    },
    iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none"
    },
    backIconRotate: {
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "-ms-transform": "rotate(180deg)",
        "-o-transform": " rotate(180deg)",
        transform: "rotate(180deg)",
    }

}))

export default function MovieCarousel(props) {
    const videos = props.movie.videos.results
    const classes = useStyles()

    return (
        <Carousel
            className={classes.root}
            navButtonsAlwaysVisible
            animation="slide"
            autoPlay={false}
            indicators={false}
            NextIcon={<Icon color="primary">arrow_forward_ios</Icon>}
            PrevIcon={<Icon className={classes.backIconRotate} color="primary">arrow_forward_ios</Icon>}
        >
                {
                    videos.map(video => (
                        <iframe
                            title={video.name}
                            className={classes.iframe}
                            src={"https://www.youtube.com/embed/" + video.key}
                            key={video.id}
                        >
                        </iframe>
                    ))
                }
        </Carousel>
    )
}