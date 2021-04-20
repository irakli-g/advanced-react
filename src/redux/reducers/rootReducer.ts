import { combineReducers } from "redux";
import { commentsReducer, authReducer } from "./";

export const rootReducer = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});
