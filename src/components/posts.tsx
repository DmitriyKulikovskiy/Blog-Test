import React, { useState } from "react";
import { PostsType, CommentsType } from "../redux/posts-types";
import Post from "./post";

type Props = {
  posts: Array<PostsType> | null;
  comments: Array<CommentsType> | null;
  addNewPost: (title: String, body: String, id: Number) => void;
  deletePosts: (id: Number) => void;
  updatePost: (id: Number, updatedPost: String, updatedTitle: String) => void;
  addNewComment: (postId: Number, body: String, id: Number) => void;
  getAllComments: () => void;
};

const PostsList: React.FC<Props> = ({
  posts,
  comments,
  addNewPost,
  deletePosts,
  updatePost,
  addNewComment,
  getAllComments,
}) => {
  const [titleText, setTitleText] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");

  // update posts

  const [editableItemId, setEditableItemId] = useState<Number | null>(null);
  const [editMode, setEditMode] = useState<Boolean>(false);

  const [newPost, setNewPost] = useState<String>("");
  const [newTitle, setNewTitle] = useState<String>("");

  const editModeOn = (id: Number) => {
    setEditMode(true);
    setEditableItemId(id);
  };
  const editModeOf = (
    id: Number,
    updatedPost: String,
    updatedTitle: String
  ) => {
    setEditMode(false);
    updatePost(id, updatedPost, updatedTitle);
  };

  return (
    <Post
      posts={posts}
      comments={comments}
      addNewPost={addNewPost}
      deletePosts={deletePosts}
      updatePost={updatePost}
      editModeOf={editModeOf}
      editModeOn={editModeOn}
      setNewTitle={setNewTitle}
      setNewPost={setNewPost}
      newTitle={newTitle}
      newPost={newPost}
      editMode={editMode}
      bodyText={bodyText}
      titleText={titleText}
      setTitleText={setTitleText}
      editableItemId={editableItemId}
      setBodyText={setBodyText}
      addNewComment={addNewComment}
      getAllComments={getAllComments}
    />
  );
};

export default PostsList;
