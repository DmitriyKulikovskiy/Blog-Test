import {
  GET_POSTS_DATA,
  GET_COMMENTS_DATA,
  ADD_NEW_POST,
  DELETE_POST,
  UPDATE_POST,
  ADD_COMMENT,
} from "./posts-reducer";
import { PostsType, CommentsType } from "./posts-types";

//actions creators

export const setPosts = (posts: Array<PostsType>): GetAllPostsType => ({
  type: "GET_POSTS_DATA",
  posts,
});

export const setComments = (
  comments: Array<CommentsType>
): GetAllCommentsType => ({ type: "GET_COMMENTS_DATA", comments });

export const createNewPost = (title: String, body: String, id: Number) => ({
  type: "ADD_NEW_POST",
  title,
  body,
  id,
});
export const setDeletePost = (id: Number) => ({ type: "DELETE_POST", id });

export const setPostUpdate = (
  id: Number,
  updatedPost: String,
  updatedTitle: String
) => ({
  type: "UPDATE_POST",
  id,
  updatedPost,
  updatedTitle,
});

export const setNewComment = (postId: Number, body: String, id: Number) => ({
  type: "ADD_COMMENT",
  postId,
  body,
  id,
});

//actions types

export type GetAllPostsType = {
  type: typeof GET_POSTS_DATA;
  posts: Array<PostsType>;
};

export type GetAllCommentsType = {
  type: typeof GET_COMMENTS_DATA;
  comments: Array<CommentsType>;
};

export type CreateNewPostType = {
  type: typeof ADD_NEW_POST;
  body: String;
  title: String;
  id: Number;
};

export type DeletePostType = {
  type: typeof DELETE_POST;
  id: Number;
};

export type UpdatePostType = {
  type: typeof UPDATE_POST;
  id: Number;
  updatedPost: String;
  updatedTitle: String;
};

export type AddCommentsType = {
  type: typeof ADD_COMMENT;
  postId: Number;
  body: String;
  id: Number;
};

//total action list type
export type ActionsTypes =
  | GetAllPostsType
  | GetAllCommentsType
  | CreateNewPostType
  | DeletePostType
  | UpdatePostType
  | AddCommentsType;
