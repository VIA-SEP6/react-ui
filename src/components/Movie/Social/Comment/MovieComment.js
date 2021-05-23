import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import movieApiService from "../../../../services/firebase/api/movie";
import firestoreReferenceService from "../../../../services/firebase/firestore/references";
import SocialCard from "../SocialCard/SocialCard";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 0)
    },
}))

export default function MovieComment(props) {
    const [comments, setComments] = useState([])
    const classes = useStyles()

    const {movieId, currentUser, addComment} = props

    const handleLike = (commentId) => {
        movieApiService.likeComment(commentId)
    }

    const handleDislike = (commentId) => {
        movieApiService.dislikeComment(commentId)
    }

    const handleClearReaction = (commentId) => {
        movieApiService.clearCommentReaction(commentId)
    }

    const getReplies = (parentId) => {
        return comments.filter(comment => comment.parent === parentId)
    }

    useEffect(() => {
        firestoreReferenceService
            .getCommentsByMovieIdReference(movieId)
            .onSnapshot(
                snapshot => {
                    setComments([])
                    snapshot.forEach(document => {
                        if (document.exists) {
                            const commentObject = {
                                id: document.id, ...document.data(),
                            }
                            setComments(comments => [...comments, commentObject])
                        }

                    })
                },
                error => {
                    console.log(error.message)
                })
    }, [setComments, movieId])

    return (
        <div className={classes.root}>
            {comments.filter(comment => !comment.parent).map(comment => (
                <SocialCard
                    key={comment.id}
                    id={comment.id}
                    currentUser={currentUser}
                    type="comment"
                    isDislike={comment.dislikes?.includes(currentUser.uid)}
                    dislikes={comment.dislikes?.length}
                    isLike={comment.likes?.includes(currentUser.uid)}
                    likes={comment.likes?.length}
                    handleLike={(id) => handleLike(id || comment.id)}
                    handleDislike={(id) => handleDislike(id || comment.id)}
                    handleClearReaction={(id) => handleClearReaction(id || comment.id)}
                    avatarSrc={comment.user?.profilePhotoUrl}
                    username={comment.user?.userName}
                    userId={comment.userId}
                    description={comment.content}
                    postDate={comment.timestamp?.toDate()}
                    getReplies={getReplies}
                    addComment={(text, parent) => addComment(text, parent || comment.id)}
                />
            ))}
        </div>

    )
}