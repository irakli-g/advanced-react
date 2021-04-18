interface addCommentAction {
  type: "ADD_COMMENT";
  payload: CommentData;
}

type CommentsActions = addCommentAction;

export type { CommentsActions, addCommentAction };
