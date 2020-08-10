import { PostsType, CommentsType } from "./posts-types";
import { ActionsTypes } from "./actions";

//actions
export const GET_POSTS_DATA = "GET_POSTS_DATA";
export const GET_COMMENTS_DATA = "GET_COMMENTS_DATA";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const ADD_COMMENT = "ADD_COMMENT ";

//state
type InitialStateType = {
  posts: Array<PostsType> | null;
  comments: Array<CommentsType> | null;
};

let initialState: InitialStateType = {
  posts: null,
  comments: null,
};

//reducer
const PostsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case GET_POSTS_DATA:
      return {
        ...state,
        posts: action.posts,
      };
    case GET_COMMENTS_DATA:
      return {
        ...state,
        comments: action.comments,
      };
    case ADD_NEW_POST:
      let NewPost = {
        id: action.id,
        body: action.body,
        title: action.title,
      };
      return {
        ...state,
        posts: [...state.posts, NewPost],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.id
            ? { ...p, body: action.updatedPost, title: action.updatedTitle }
            : p
        ),
      };
    case ADD_COMMENT:
      let NewComment = {
        postId: action.postId,
        body: action.body,
        id: action.id,
      };
      return {
        ...state,
        comments: [...state.comments, NewComment],
      };

    default:
      return state;
  }
};

export default PostsReducer;
