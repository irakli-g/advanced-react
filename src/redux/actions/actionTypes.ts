interface addCommentAction {
  type: "ADD_COMMENT";
  payload: CommentData;
}

interface fetchCommentsAction {
  type: "FETCH_COMMENTS";
  payload: CommentData[];
}

interface switchAuthAction {
  type: "SWITCH_AUTH";
  payload: boolean;
}

type CommentsActions = addCommentAction | fetchCommentsAction;
type AuthActions = switchAuthAction;

export type {
  CommentsActions,
  addCommentAction,
  fetchCommentsAction,
  AuthActions,
  switchAuthAction,
};
