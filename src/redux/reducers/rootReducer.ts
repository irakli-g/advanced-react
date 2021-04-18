import { combineReducers } from "redux";
import { commentsReducer } from "./";

export const rootReducer = combineReducers({
  comments: commentsReducer,
});
