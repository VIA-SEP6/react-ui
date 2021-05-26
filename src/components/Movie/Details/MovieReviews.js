import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CustomModal from "../../Layout/Modal/CustomModal"
import MovieRating from "../MovieRating";
import BarChart from "../../../components/Common/Charts/BarChart"
import {useTheme} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    paper: {
        width: 600,
        padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            width: 400,
        },
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
    },
}))


export default function MovieReviews(props) {
    const classes = useStyles()
    const theme = useTheme();

    const { reviewStatistics, tmaVoteAverage, imdbVoteAverage } = props

    function getTMABarChartData(){
        return [{
            label: "TMA Review Distribution",
            data: Object.values(reviewStatistics.tma_review_count || {}),
            backgroundColor: theme.palette.primary.chartColor,
            hoverBackgroundColor: theme.palette.primary.chartHover,
            borderColor: theme.palette.primary.chartBorder,
            borderWidth: 1,
        }]
    }

    function getIMDBBarChartData(){
        return [{
            label: "IMDb Review Distribution",
            data: Object.values(reviewStatistics.tmdb_review_count || {}),
            backgroundColor: theme.palette.yellow.chartColor,
            hoverBackgroundColor: theme.palette.yellow.chartHover,
            borderColor: theme.palette.yellow.chartBorder,
            borderWidth: 1,
        }]
    }

    return (
        <React.Fragment>
            <CustomModal
                toggle={<MovieRating rating={tmaVoteAverage}
                    icon="star" />}
            >
                <Paper className={classes.paper}>
                    <BarChart labels={Object.keys(reviewStatistics.tma_review_count || {})} datasets={getTMABarChartData()}  />
                </Paper>
            </CustomModal>
            <CustomModal
                toggle={<MovieRating rating={imdbVoteAverage}
                    iconSrc="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" />}
            >
                <Paper className={classes.paper}>
                    <BarChart labels={Object.keys(reviewStatistics.tmdb_review_count || {})} datasets={getIMDBBarChartData()}  />
                </Paper>
            </CustomModal>
        </React.Fragment>
    )
}