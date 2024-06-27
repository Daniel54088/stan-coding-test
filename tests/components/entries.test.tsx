import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Entries from "../../src/components/Entries";
import { fetchEntriesData } from "../../src/utils/fetch-entries";
import { mockEntriesData } from "../utils/mock-data";

jest.mock("../../src/utils/fetch-entries");

describe("Entries Component", () => {
  test("displays the Loading component when loading is true", () => {
    // Mock the fetchEntriesData function to set loading to true
    (fetchEntriesData as jest.Mock).mockImplementation(
      (trimmedPath, setFilteredEntries, setLoading) => {
        setLoading(true);
      }
    );

    render(<Entries trimmedPath="series" />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test("displays the Entry components when loading is false and filteredEntries is populated", () => {
    // Mock the fetchEntriesData function to set loading to false and provide mock entries
    (fetchEntriesData as jest.Mock).mockImplementation(
      (trimmedPath, setFilteredEntries, setLoading) => {
        setFilteredEntries(mockEntriesData.entries);
        setLoading(false);
      }
    );

    render(<Entries trimmedPath="series" />);

    expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();

    // Check that the Entry components are rendered
    mockEntriesData.entries.forEach((entry) => {
      expect(screen.getByText(entry.title)).toBeInTheDocument();
      expect(screen.getByRole("img", { name: entry.title })).toHaveAttribute(
        "src",
        entry.images["Poster Art"].url
      );
    });
  });
});
