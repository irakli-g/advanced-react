import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Root } from "../redux/Root";
import { CommentBox, CommentList } from "../components";
import React from "react";

describe("commentList", () => {
  beforeEach(() => {
    render(
      <React.Fragment>
        <CommentBox />
        <CommentList />
      </React.Fragment>,
      { wrapper: Root }
    );
  });
  test("should fetch comments on a button click", async (done) => {
    const button = screen.getByRole("button", { name: /fetch comments/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Fetch Comments");
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(4);
    });
  });
});
