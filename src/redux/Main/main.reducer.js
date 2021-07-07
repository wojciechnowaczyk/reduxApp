import { ADD_POSTS, ADD_POST_LIKE, DELETE_POST_LIKE } from "./main.types";

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
    default:
      return state;
  }
};
