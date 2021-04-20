interface addCommentAction {
  type: "ADD_COMMENT";
  payload: CommentData;
}

interface fetchCommentsAction {
  type: "FETCH_COMMENTS";
  payload: CommentData[];
}

type CommentsActions = addCommentAction | fetchCommentsAction;

export type { CommentsActions, addCommentAction, fetchCommentsAction };
