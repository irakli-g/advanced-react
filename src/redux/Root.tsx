import React from "react";
import { rootReducer } from "./reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { commentValidator } from "./middlewares/validateComment";

// initialState prop is used only for testing purposes and has no connection to production codebase.
// It makes it possible to pass fake data through Root component. Check CommentList.test.tsx file for example.

interface Props {
  initialState?: Object;
}

export const Root: React.FC<Props> = ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxPromise, commentValidator)
      )}
    >
      {children}
    </Provider>
  );
};

export type AppState = ReturnType<typeof rootReducer>;
