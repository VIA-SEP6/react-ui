import {makeStyles} from "@material-ui/core/styles";
import CommentRank from "./CommentRank";
import TopicHeader from "../Common/TopicHeader";
import {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import LoadingSkeleton from "./LoadingSkeleton";

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function TopCommenters(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const classes = useStyles()

    useEffect(() => {
        setTimeout(() => {
            setUsers([
                {
                    id: 1,
                    userName: "David",
                    likes: 566,
                    profileUrl: "https://lh3.googleusercontent.com/a-/AOh14Gj-ueewFxQnzU8B8S7ESn2NJMaeDTy0IRybO0RC=s96-c"
                },
                {
                    id: 2,
                    userName: "Test",
                    likes: 53,
                    profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOnlTR6M8ru8eup4smkyRvcS63JIGl6tIgm6mzQcHDlD4loJ61p2fHphe1GLqpaPkJ14&usqp=CAU"
                },
                {
                    id: 3,
                    userName: "Test",
                    likes: 25,
                    profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOnlTR6M8ru8eup4smkyRvcS63JIGl6tIgm6mzQcHDlD4loJ61p2fHphe1GLqpaPkJ14&usqp=CAU"
                },
                {
                    id: 4,
                    userName: "Test",
                    likes: 12,
                    profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOnlTR6M8ru8eup4smkyRvcS63JIGl6tIgm6mzQcHDlD4loJ61p2fHphe1GLqpaPkJ14&usqp=CAU"
                },
                {
                    id: 5,
                    userName: "Test",
                    likes: 5,
                    profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOnlTR6M8ru8eup4smkyRvcS63JIGl6tIgm6mzQcHDlD4loJ61p2fHphe1GLqpaPkJ14&usqp=CAU"
                }
            ])
            setLoading(false)
        }, 2000)
    }, [setUsers])

    let content = (
        users.map((user, index) => (
            <CommentRank key={user.id} userId={user.id} rank={index + 1} username={user.userName} likes={user.likes} src={user.profileUrl}/>
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