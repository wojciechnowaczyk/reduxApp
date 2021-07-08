import { ADD_POSTS, ADD_POST_LIKE, DELETE_POST_LIKE, ADD_COMMENT, DELETE_COMMENT } from "./main.types";

const initialState = {
  posts: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST_LIKE:
        return {
            ...state,
            posts: state.posts.map((post) => {
                if(post.id === action.payload.id){
                    return {...post, likesCount: post.likesCount + 1}
                }
                else{
                    return post
                }
            })
            
        };
    case DELETE_POST_LIKE:
        return {
            ...state,
            posts: state.posts.map((post) => {
                if(post.id === action.payload.id){
                    return {...post, likesCount: post.likesCount - 1}
                    }
                else{
                    return post
                }
            })
            
        };
    case ADD_COMMENT:
        const newComment = {id: (Math.random()*100), text: action.payload.text, likesCount: 0};
        return{
            ...state,
            posts: state.posts.map((post) => {
                if(post.id === action.payload.id){
                    return {...post, comments: post.comments.concat(newComment)}
                    }
                else{
                    return post
                }
            })
        }
    case DELETE_COMMENT:
        const post = state.posts.find((post) => post.id === action.payload.postId);
        const index = post.comments.findIndex(comment => comment.id === action.payload.commentId);
        const newCommentsArray = [...post.comments.slice(0, index), ...post.comments.slice(index + 1)]

        return{
            ...state,
            posts: state.posts.map((post) => {
                if(post.id === action.payload.postId){
                    return {...post, comments: newCommentsArray}
                    }
                else{
                    return post
                }
            })
            
        }
    default:
      return state;
  }
};
