import {makeStyles} from "@material-ui/core/styles";
import CommentRank from "./CommentRank";
import TopicHeader from "../../Common/TopicHeader";
import {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import LoadingSkeleton from "./LoadingSkeleton";
import userStatisticsApiService from "../../../services/firebase/api/userStatistics";

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function TopCommenters(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const classes = useStyles()

    useEffect(() => {
        userStatisticsApiService.getTopCommenters()
            .then(commenters => {
                setUsers(commenters || [])
                setLoading(false)
            })
    }, [setUsers])

    let content = (
        users.map((user, index) => (
            <CommentRank key={user.id} userId={user.id} rank={index + 1} username={user.userName}
                         commentCount={user.nrOfComments} src={user.profilePhotoUrl}/>
        ))
    )

    if (loading)
        content = <LoadingSkeleton/>


    return (
        <div className={classes.root}>
            <TopicHeader>Top Commenters</TopicHeader>
            <Grid container alignContent="center" justify="center">
                {content}
            </Grid>
        </div>
    )
}