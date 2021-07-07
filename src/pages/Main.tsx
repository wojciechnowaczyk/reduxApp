import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  addPostLike,
  deletePostLike,
} from "../redux/Main/main.actions";
import { RootState } from "../redux/store";
export default function Main() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.main.posts);
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts);
  }, []);

  const renderPosts = () => {
    if (posts && posts.length > 0) {
      return posts.map((post: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              marginBottom: "20px",
            }}
          >
            <p>{post.name}</p>
            <p>Likes count: {post.likesCount}</p>
            <div>
              <div onClick={() => dispatch(addPostLike(post.id))}>+</div>
              <div onClick={() => dispatch(deletePostLike(post.id))}> -</div>
            </div>
            <div>Comments:</div>
            <div>
              {post.comments && post.comments.length > 0
                ? post.comments.map((comment: any, index: number) => {
                    return (
                      <div
                        style={{
                          marginBottom: "20px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        key={index}
                      >
                        {comment.text}
                        <p>Likes Count: {comment.likesCount}</p>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        );
      });
    }
  };

  return <div>{renderPosts()}</div>;
}
