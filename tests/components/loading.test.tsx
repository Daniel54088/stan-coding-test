import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "../../src/components/loading";

describe("Loading Component", () => {
  test("displays the correct loading component", () => {
    render(<Loading />);
    const loading = screen.getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();
  });
});
