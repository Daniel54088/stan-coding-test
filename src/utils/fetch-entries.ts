import { EntryData, TEntry } from "../types/entry-types";

const endpoint =
  "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

export const fetchEntriesData = async (
  trimmedPath: string,
  setFilteredEntries: (entries: TEntry[]) => void,
  setLoading: (loading: boolean) => void
) => {
  try {
    setLoading(true);
    const response = await fetch(endpoint);
    const data: EntryData = await response.json();

    const resultEntries = data.entries
      .filter((entry) => entry.programType === trimmedPath)
      .filter((entry) => entry.releaseYear >= 2010)
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 21);

    setFilteredEntries(resultEntries);
    setLoading(false);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
