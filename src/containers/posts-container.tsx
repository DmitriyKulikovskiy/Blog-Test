import React from "react";
import PostsList from "../components/posts";
import { connect } from "react-redux";
import { AppStateType } from "../redux/store";
import { PostsType, CommentsType } from "../redux/posts-types";
import {
  getAllComments,
  addNewPost,
  getAllPosts,
  deletePosts,
  updatePost,
  addNewComment,
} from "../redux/posts-thunk";

type PropsType = {
  posts: Array<PostsType> | null;
  comments: Array<CommentsType> | null;

  getAllPosts: () => void;
  getAllComments: () => void;
  addNewPost: (title: String, body: String, id: Number) => void;
  deletePosts: (id: Number) => void;
  updatePost: (id: Number, updatedPost: String, updatedTitle: String) => void;
  addNewComment: (postId: Number, body: String, id: Number) => void;
};

class PostsContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getAllPosts();
  }

  componentWillUpdate() {
    this.props.getAllComments();
  }

  render() {
    return <PostsList {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.PostsReducer.posts,
    comments: state.PostsReducer.comments,
  };
};

export default connect(mapStateToProps, {
  getAllPosts,
  getAllComments,
  addNewPost,
  deletePosts,
  updatePost,
  addNewComment,
})(PostsContainer);
