import React from "react";
import { CommentList } from "../components";

const List: React.FC = () => {
  return (
    <section data-testid="list-page">
      <CommentList />
    </section>
  );
};

export default List;
