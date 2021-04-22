interface addCommentAction {
  type: "ADD_COMMENT";
  payload: CommentData;
}

interface fetchCommentsAction {
  type: "FETCH_COMMENTS";
  payload: CommentData[];
}

type CommentsActions = addCommentAction | fetchCommentsAction;

interface switchAuthAction {
  type: "SWITCH_AUTH";
  payload: boolean;
}

interface warnUserAction {
  type: "WARN_USER";
  payload: string;
}

type AuthActions = switchAuthAction | warnUserAction;

type AppActions = AuthActions | CommentsActions;
