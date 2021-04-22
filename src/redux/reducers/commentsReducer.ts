interface DefaulState {
  comments: CommentData[];
}
const defaultState: DefaulState = {
  comments: [{ id: 9999, name: "test comment" }],
};

const commentsReducer = (state = defaultState, action: CommentsActions): DefaulState => {
  if (action.type === "ADD_COMMENT") {
    const comment = action.payload;
    return {
      ...state,
      comments: [...state.comments, comment],
    };
  }

  if (action.type === "FETCH_COMMENTS") {
    const tempComments = action.payload.map(({ id, name }) => {
      return { id, name };
    });
    return {
      ...state,
      comments: [...state.comments, ...tempComments],
    };
  }

  return {
    ...state,
  };
};

export default commentsReducer;
