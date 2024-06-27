import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../src/components/header";

describe("Header Component", () => {
  test("displays the correct heading", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { name: /DEMO Streaming/i });
    expect(heading).toBeInTheDocument();
  });

  test("has two navigation links", () => {
    render(<Header />);
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(2);
  });

  test("2 buttons exist and have correct className", () => {
    render(<Header />);
    const loginListItem = screen.getByText(/Log in/i);
    const freeTrialListItem = screen.getByText(/Start your free trial/i);
    expect(loginListItem).toBeInTheDocument();
    expect(freeTrialListItem).toBeInTheDocument();
    expect(loginListItem).toHaveClass("button");
    expect(freeTrialListItem).toHaveClass("button button--secondary");
  });
});
