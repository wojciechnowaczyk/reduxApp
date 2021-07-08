import { ADD_POSTS, ADD_POST_LIKE, DELETE_POST_LIKE, ADD_COMMENT, DELETE_COMMENT } from "./main.types";
import { posts } from "../../mockedData";

export const fetchPosts = () => {
    return {
        type: ADD_POSTS,
        payload: posts
    }
}

export const addPostLike = (postId) => {
    return {
        type: ADD_POST_LIKE,
        payload: {id: postId}
    }
}

export const deletePostLike = (postId) => {
    return {
        type: DELETE_POST_LIKE,
        payload: {id: postId}
    }
}

export const addComment = (postId, text) => {
    return {
        type: ADD_COMMENT,
        payload: {id: postId, text: text}
    }
}

export const deleteComment = (postId, commentId) => {
    return {
        type: DELETE_COMMENT,
        payload: {postId: postId, commentId: commentId}
    }
}