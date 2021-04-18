import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../redux/actions/commentsActions";

interface Props {
  addComment: (comment: CommentData) => void;
}

const CommentBox: React.FC<Props> = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    </div>
  );
};

const mapDispatchToProps = () => {
  return {
    addComment,
  };
};

export default connect(null, mapDispatchToProps)(CommentBox);
