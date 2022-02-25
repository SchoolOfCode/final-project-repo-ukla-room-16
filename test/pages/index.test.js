import React from "react";
import { render, screen } from "../test-utils";
import Home from "../../pages/index";

describe("HomePage", () => {
  it("should render the title", () => {
    const textToFind = "Familia"

    render(<Home />);
    const title = screen.getByText(textToFind);

    expect(title).toBeInTheDocument();
  });
});