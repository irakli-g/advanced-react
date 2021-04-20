import { Header } from "../";
import { Root } from "../../redux/Root";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      { wrapper: Root }
    );
  });
  test("should have two li element", () => {
    const elements = screen.getAllByRole("listitem");
    expect(elements).toHaveLength(2);
  });
});
