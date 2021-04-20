import React from "react";
import { connect } from "react-redux";
import { AppState } from "../redux/Root";

interface Props {
  comments: CommentData[];
}

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div data-testid="list">
      <h2>Comments</h2>
      <ul>
        {comments.length > 0 &&
          comments.map((comment) => {
            return <li key={comment.id}>{comment.name}</li>;
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    comments: state.comments.comments,
  };
};

export default connect(mapStateToProps)(CommentList);
