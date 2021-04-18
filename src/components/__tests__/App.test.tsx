import { render, screen } from "@testing-library/react";
import App from "../../App";
import { Root } from "../../redux/Root";

describe("App component", () => {
  beforeEach(() => {
    render(<App />, { wrapper: Root });
  });
  test("should render CommentBox", () => {
    const commentBox = screen.getByTestId("box", { exact: true });
    expect(commentBox).toBeVisible();
  });
  test("should render CommentList", () => {
    const commentList = screen.getByTestId("list", { exact: true });
    expect(commentList).toBeInTheDocument();
    expect(commentList).toBeVisible();
  });
});
