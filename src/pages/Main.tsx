import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  addPostLike,
  deletePostLike,
  addComment,
  deleteComment,
} from "../redux/Main/main.actions";
import { RootState } from "../redux/store";
export default function Main() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<any>("");
  const posts = useSelector((state: RootState) => state.main.posts);
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts);
  }, []);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: any, postId: any) => {
    dispatch(addComment(postId, inputValue));
    event.preventDefault();
  };
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
                        <div
                          onClick={() =>
                            dispatch(deleteComment(post.id, comment.id))
                          }
                        >
                          Delete comment
                        </div>
                      </div>
                    );
                  })
                : null}
              <form onSubmit={(e) => handleSubmit(e, post.id)}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <input type="submit" value="Wyślij" />
              </form>
            </div>
          </div>
        );
      });
    }
  };

  return <div>{renderPosts()}</div>;
}
