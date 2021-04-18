import React from "react";
import { rootReducer } from "./reducers/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// initialState is used only for testing purposes and has no connection the production code. It makes it possible to pass fake data to components through Root.
// check CommentList.test.tsx line xxx as an example

const reduxStore = (initialState?: any) => {
  return createStore(rootReducer, initialState);
};

interface Props {
  initialState?: any;
}

const Root: React.FC<Props> = ({ children, initialState = {} }) => {
  const store = reduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

type AppState = ReturnType<typeof rootReducer>;

export { Root, reduxStore };
export type { AppState };
