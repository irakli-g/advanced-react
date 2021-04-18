import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommentBox } from "../";
import { Root } from "../../redux/Root";

describe("CommentBox component", () => {
  beforeEach(() => {
    render(<CommentBox />, { wrapper: Root });
  });
  test("should contain textarea and allow to type in it", () => {
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
    userEvent.clear(textarea);
    userEvent.type(textarea, "jackass");
    expect(textarea).toHaveValue("jackass");
  });
  test("should contain button and clear textarea on submit", () => {
    const button = screen.getByRole("button", { name: /submit comment/i });
    expect(button).toBeInTheDocument();
    const textarea = screen.getByRole("textbox");
    userEvent.clear(textarea);
    userEvent.type(textarea, "jackass");
    userEvent.click(button);
    expect(textarea).toHaveValue("");
  });
});
