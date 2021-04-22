import { Middleware } from "redux";
import { AppActions } from "../actions/actionTypes";

export const commentValidator: Middleware = ({ dispatch }) => (next) => (action: AppActions) => {
  if (action.type === "ADD_COMMENT") {
    const { name } = action.payload;
    if (name.trim().length > 10) {
      const newAction = {
        type: "WARN_USER",
        payload: `Length of ${name.trim().length} is more than 10 and not allowed.`,
      };
      console.log(newAction);
      dispatch(newAction);
    }
  }
  next(action);
};
