import { render, screen } from "@testing-library/react";
import { AppState, Root } from "../../redux/Root";
import { CommentList } from "../";

const mockData: CommentData[] = [
  { id: 2, name: "comment one" },
  { id: 3, name: "comment two" },
  { id: 4, name: "comment three" },
];

describe("CommentList component", () => {
  const initialState: AppState = {
    comments: { comments: mockData },
  };
  beforeEach(() => {
    render(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });
  test("should render li elements when data is passed", () => {
    const comments = screen.getAllByRole("listitem");
    expect(comments).toHaveLength(3);
  });
});
