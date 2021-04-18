import { commentsReducer } from "../";
import { addCommentAction } from "../../actions/actionTypes";

const data: CommentData = { id: 1, title: "comment one" };

describe("commentsReducer", () => {
  test("should add comment to the list", () => {
    const action: addCommentAction = {
      type: "ADD_COMMENT",
      payload: data,
    };
    const state = commentsReducer({ comments: [] }, action);
    expect(state.comments).toHaveLength(1);
    expect(state.comments[0]).toEqual(data);
  });
});
