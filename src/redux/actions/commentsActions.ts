import axios from "axios";

export const addComment = (comment: CommentData): addCommentAction => {
  return {
    type: "ADD_COMMENT",
    payload: comment,
  };
};

export const fetchComments = (): fetchCommentsAction => {
  const response = axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(({ data }) => data);

  return {
    type: "FETCH_COMMENTS",
    payload: (response as unknown) as CommentData[],
  };
};
