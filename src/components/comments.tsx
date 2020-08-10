import React from "react";
import { CommentsType } from "../redux/posts-types";

type Props = {
  comments: Array<CommentsType> | null;
  postedId: Number;
};

const Comments: React.FC<Props> = ({ comments, postedId }) => {
  return (
    <div>
      {comments?.map((el) => (
        <div key={Number(el.id)}>
          {el.postId === postedId ? (
            <div className="comm_box">
              <p>{el.body}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Comments;
