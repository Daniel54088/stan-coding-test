import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Entry from "../../src/components/entry";

describe("Entry Component", () => {
  test("displays the correct entry component", () => {
    render(<Entry title="Harry Potter" imageUrl="http://mock-image-url.png" />);
    const entryTitle = screen.getByText(/Harry Potter/i);
    const entryImg = screen.getByRole("img");

    expect(entryTitle).toBeInTheDocument();
    expect(entryImg).toHaveAttribute("src", "http://mock-image-url.png");
  });
});
