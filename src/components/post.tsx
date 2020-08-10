import React, { useState, useEffect } from "react";
import { PostsType, CommentsType } from "../redux/posts-types";
import "../styles/posts.sass";
import Comments from "./comments";

type Props = {
  posts: Array<PostsType> | null;
  comments: Array<CommentsType> | null;
  addNewPost: (title: String, body: String, id: Number) => void;
  deletePosts: (id: Number) => void;
  updatePost: (id: Number, updatedPost: String, updatedTitle: String) => void;
  editModeOf: (id: Number, updatedPost: String, updatedTitle: String) => void;
  editModeOn: (id: Number) => void;
  setNewTitle: (value: String) => void;
  setNewPost: (value: String) => void;
  newPost: String;
  editMode: Boolean;
  bodyText: String;
  titleText: String;
  newTitle: String;
  editableItemId: null | Number;
  setBodyText: (bodyText: any) => void;
  setTitleText: (value: any) => void;
  addNewComment: (postId: Number, body: String, id: Number) => void;
  getAllComments: () => void;

};

const Post: React.FC<Props> = ({
  posts,
  comments,
  addNewPost,
  deletePosts,
  updatePost,
  editModeOf,
  editModeOn,
  setNewTitle,
  setNewPost,
  editMode,
  titleText,
  bodyText,
  newTitle,
  editableItemId,
  setBodyText,
  newPost,
  setTitleText,
  addNewComment,
  getAllComments
}) => {
  const [commentsStatus, setCommentsStatus] = useState<Boolean>(false);
  const commentsHandler = () => {
    setCommentsStatus(!commentsStatus);
  };
  const [commentText, setCommentText] = useState<String>("");


  useEffect(() => {
    getAllComments()
  },[])

  return (
    <div className="container">
      <div className="row">
        {posts?.map((el) => (
          <div key={Number(el.id)} className="col-lg-12">
            <div className="post_container">
              <div className="img_box">
                {editableItemId === el.id && editMode === true ? (
                  <button onClick={() => editModeOf(el.id, newPost, newTitle)}>
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    Save
                  </button>
                ) : (
                  <button onClick={() => editModeOn(el.id)}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    Edit
                  </button>
                )}
                {editableItemId === el.id && editMode === true ? (
                  <textarea onChange={(e) => setNewTitle(e.target.value)} />
                ) : (
                  <p>{el.title}</p>
                )}
              </div>
              <div className="text_box">
                {editableItemId === el.id && editMode === true ? (
                  <textarea onChange={(e) => setNewPost(e.target.value)} />
                ) : (
                  <p>{el.body}</p>
                )}

                <button onClick={() => deletePosts(el.id)}>
                  delete
                  <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="comments_btn">
              <p onClick={commentsHandler}>
                <i className="fa fa-comment" aria-hidden="true"></i>
                <span>Comments</span>
              </p>
            </div>
            <div
              className={
                commentsStatus === false ? "close_comments" : "open_comments"
              }
            >
              <p className="comm_title">Comments:</p>
              <Comments comments={comments} postedId={el.id} />
              <hr />
              <div className="row create_comments_box">
                <div className="col-lg-10">
                  <textarea onChange={(e) => setCommentText(e.target.value)} />
                </div>
                <div className="col-lg-2">
                  <button
                    onClick={() =>
                      addNewComment(
                        el.id,
                        commentText,
                        new Date().getMilliseconds()
                      )
                    }
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="container">
          <div className="row text-center create_box">
            <div className="col-lg-12 title_create">
              <p>Create your own article</p>
              <hr />
            </div>
            <div className="col-lg-4">
              <p>Title:</p>
              <textarea onChange={(e) => setTitleText(e.target.value)} />
            </div>
            <div className="col-lg-8">
              <p>Description:</p>
              <textarea onChange={(e) => setBodyText(e.target.value)} />
            </div>
            <div className="col-lg-12">
              <button
                onClick={() =>
                  addNewPost(titleText, bodyText, new Date().getMilliseconds())
                }
              >
                add post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
