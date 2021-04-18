import { reduxStore } from "../Root";

const store = reduxStore();

const addComment = (comment: CommentData) => {
  store.dispatch({ type: "ADD_COMMENT", payload: comment });
};

export { addComment };
