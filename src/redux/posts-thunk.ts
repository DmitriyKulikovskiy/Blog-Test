import {
  setComments,
  createNewPost,
  setPosts,
  setDeletePost,
  setPostUpdate,
  setNewComment,
} from "./actions";
import { postsAPI } from "../API/api";

export const getAllComments = () => async (dispatch: any) => {
  let response = await postsAPI.getAllComments();
  dispatch(setComments(response));
};

export const addNewPost = (title: String, body: String, id: Number) => async (
  dispatch: any
) => {
  let response = await postsAPI.createPost(title, body, id);
  if (response) {
    dispatch(createNewPost(title, body, id));
  }
};

export const getAllPosts = () => async (dispatch: any) => {
  let response = await postsAPI.getAllPosts();
  dispatch(setPosts(response));
};

export const deletePosts = (id: Number) => async (dispatch: any) => {
  let response = await postsAPI.deletePost(id);
  if (response) {
    dispatch(setDeletePost(id));
  }
};

export const updatePost = (
  id: Number,
  updatedPost: String,
  updatedTitle: String
) => async (dispatch: any) => {
  let response = await postsAPI.updatePost(id, updatedPost, updatedTitle);
  if (response) {
    dispatch(setPostUpdate(id, updatedPost, updatedTitle));
  }
};

export const addNewComment = (
  postId: Number,
  body: String,
  id: Number
) => async (dispatch: any) => {
  let response = await postsAPI.addComment(postId, body, id);
  if (response) {
    dispatch(setNewComment(postId, body, id));
  }
};
