import { ADD_POSTS, ADD_POST_LIKE, DELETE_POST_LIKE } from "./main.types";
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