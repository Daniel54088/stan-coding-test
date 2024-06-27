import { fetchEntriesData } from "../../src/utils/fetch-entries";
import { mockEntriesData } from "./mock-data";

const mockSetFilteredEntries = jest.fn();
const mockSetLoading = jest.fn();

describe("fetchEntriesData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockEntriesData),
      })
    ) as jest.Mock;
  });

  test("sets loading state correctly", async () => {
    await fetchEntriesData("movie", mockSetFilteredEntries, mockSetLoading);

    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  test("movie fetches and processes data correctly", async () => {
    await fetchEntriesData("movie", mockSetFilteredEntries, mockSetLoading);

    expect(mockSetFilteredEntries).toHaveBeenCalledWith([
      {
        title: "Wonder",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        programType: "movie",
        images: {
          "Poster Art": {
            url: "https://streamcoimg-a.akamaihd.net/000/165/9396/1659396-PosterArt-14385926f542bb6cb6c1fc84d907a9b2.jpeg",
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2017,
      },
      ,
    ]);
  });

  test("series fetches and processes data correctly", async () => {
    await fetchEntriesData("series", mockSetFilteredEntries, mockSetLoading);

    expect(mockSetFilteredEntries).toHaveBeenCalledWith([
      {
        title: "Rake",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        programType: "series",
        images: {
          "Poster Art": {
            url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2010,
      },
      {
        title: "The Resort",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        programType: "series",
        images: {
          "Poster Art": {
            url: "https://streamcoimg-a.akamaihd.net/000/885/68/88568-PosterArt-a988d5aa0090e892f9015dd5ad17c0ac.jpg",
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2022,
      },
    ]);
  });
});
