import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/commentsActions";
import { v4 } from "uuid";

interface Props {
  addComment: (comment: CommentData) => void;
  fetchComments: () => void;
}

const CommentBox: React.FC<Props> = ({ addComment, fetchComments }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addComment({ id: v4(), name: text });
    setText("");
  };
  return (
    <div data-testid="box">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Comment Box</h2>
        <textarea
          name="comment"
          id="comment"
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        ></textarea>
        <button type="submit">Submit Comment</button>
      </form>
      <button
        type="button"
        onClick={() => {
          fetchComments();
        }}
      >
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
