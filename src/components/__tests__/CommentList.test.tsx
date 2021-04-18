import { render, screen } from "@testing-library/react";
import { Root } from "../../redux/Root";
import { CommentList } from "../";

describe("CommentList component", () => {
  const initialState: CommentData[] = [
    { id: 1, title: "Comment One" },
    { id: 2, title: "comment two" },
  ];
  const data = {
    comments: { comments: initialState },
  };
  render(
    <Root initialState={data}>
      <CommentList />
    </Root>
  );
  test("should render comments", () => {
    const comments = screen.getAllByRole("listitem");
    expect(comments).toHaveLength(2);
  });
});
