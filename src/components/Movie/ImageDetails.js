import {makeStyles} from "@material-ui/core/styles";
import {getImageSrc} from "../../services/util/imageValidation";

const useStyles = makeStyles(theme => ({
    root: {
        display: "inline-block",
        cursor: "pointer"
    },
    content: {
        fontSize: 10,
        width: 100,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        overflow: "hidden",
        margin: theme.spacing(0.5)
    },
    image: {
        width: 100,
        height: 150,
    },
    title: {
        margin: theme.spacing(0.5, 0),
        color: theme.palette.black.main,
    },
    subtitle: {
        color: theme.palette.gray.main
    }
}))

export default function ImageDetails(props) {
    const {imgSrc, title, subtitle} = props
    const classes = useStyles()

    return (
        <div className={classes.root} onClick={props.onClick}>
            <div className={classes.content}>
                <img className={classes.image} src={getImageSrc(imgSrc)} alt=""/>
                <span className={classes.title}>{title}</span>
                <span className={classes.subtitle}>{subtitle}</span>
            </div>
        </div>
    )
}