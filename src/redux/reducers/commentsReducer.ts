import { CommentsActions } from "../actions/actionTypes";

interface DefaulState {
  comments: CommentData[];
}
const defaultState: DefaulState = {
  comments: [],
};

const commentsReducer = (state = defaultState, action: CommentsActions): DefaulState => {
  if (action.type === "ADD_COMMENT") {
    const comment = action.payload;
    return {
      ...state,
      comments: [...state.comments, comment],
    };
  }
  return {
    ...state,
  };
};

export default commentsReducer;
