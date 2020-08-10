export type PostsType = {
  title: String;
  body: String;
  id: Number;
};

export type CommentsType = {
  postId: Number;
  id: Number;
  body: String;
};
