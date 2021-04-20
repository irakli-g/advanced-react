import { commentsReducer } from "../";
import { addCommentAction, fetchCommentsActions } from "../../actions/actionTypes";

const data: CommentData = { id: 1, name: "comment one" };
const mockAPI: CommentData[] = [
  { id: 1, name: "comment one" },
  { id: 2, name: "comment two" },
  { id: 3, name: "comment three" },
];

describe("commentsReducer", () => {
  test("should handle ADD_COMMENT action", () => {
    const action: addCommentAction = {
      type: "ADD_COMMENT",
      payload: data,
    };
    const state = commentsReducer({ comments: [] }, action);
    expect(state.comments).toHaveLength(1);
    expect(state.comments[0]).toEqual(data);
  });
  test("should handle FETCH_COMMENTS action", () => {
    const action: fetchCommentsActions = {
      type: "FETCH_COMMENTS",
      payload: mockAPI,
    };
    const state = commentsReducer({ comments: [] }, action);
    expect(state.comments.length).toBe(3);
    expect(state.comments[0].id).toBe(1);
  });
});
