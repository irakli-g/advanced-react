import React from "react";
import { CommentBox, CommentList } from "./components";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CommentBox />
      <CommentList />
    </React.Fragment>
  );
};

export default App;
