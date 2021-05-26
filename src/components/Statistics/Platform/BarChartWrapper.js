import {makeStyles} from "@material-ui/core/styles";
import BarChart from "../../Common/Charts/BarChart";
import {useEffect, useState} from "react";
import platformStatisticsApiService from "../../../services/firebase/api/platformStatistics";
import {Grid, Icon} from "@material-ui/core";
import {MONTH_LABELS, WEEK_LABELS, YEAR_LABELS} from "../../../services/util/labelProvider";
import LoadingSkeleton from "./LoadingSkeleton";

const WEEK = "week"
const MONTH = "month"
const YEAR = "year"

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function BarChartWrapper(props) {
    const [labels, setLabels] = useState([])
    const [comments, setComments] = useState([])
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const noData = comments.length === 0 || reviews.length === 0
    const classes = useStyles()

    const {type} = props

    const getData = () => {
        return [
            {
                label: "# of Comments",
                data: comments,
                backgroundColor: ["rgba(104,176,171, 0.2)"],
                hoverBackgroundColor: ["rgba(104,176,171, 0.5)"],
                borderColor: ["rgba(104,176,171, 1)"],
                borderWidth: 1,
            },
            {
                label: "# of Reviews",
                data: reviews,
                backgroundColor: ["rgba(229, 61, 0, 0.2)"],
                hoverBackgroundColor: ["rgba(229, 61, 0, 0.5)"],
                borderColor: ["rgba(229, 61, 0, 1)"],
                borderWidth: 1,
            },
        ]
    }

    const handleResult = (response) => {
        setComments(response.comments)
        setReviews(response.reviews)
        setLoading(false)
    }

    const noDataIndicator = (
        <Grid container justify="center" alignItems="center">
            <Grid item>
                <Icon fontSize="small">priority_high</Icon>
            </Grid>
            <Grid item>
                No Data found
            </Grid>
        </Grid>
    )

    const chart = (
        noData ? noDataIndicator : <BarChart labels={labels} datasets={getData()}/>
    )

    useEffect(() => {
        switch (type) {
            case WEEK:
                platformStatisticsApiService.getWeeklyPlatformStatistics.then(handleResult)
                setLabels(WEEK_LABELS)
                break;
            case MONTH:
                platformStatisticsApiService.getMonthlyPlatformStatistics.then(handleResult)
                setLabels(MONTH_LABELS)
                break;
            case YEAR:
                platformStatisticsApiService.getMonthlyPlatformStatistics.then(handleResult)
                setLabels(YEAR_LABELS)
                break;
            default:
                throw new DOMException("Unrecognized type " + type)
        }
    }, [setComments, setReviews, type])

    return (
        <div className={classes.root}>
            {loading ? (<LoadingSkeleton/>) : chart}
        </div>
    )
}