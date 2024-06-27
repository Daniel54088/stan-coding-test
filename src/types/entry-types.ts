import { entryTypes } from "../containers/constants";

export type TEntryType = keyof typeof entryTypes;

// basic types for the entry data
export type Image = {
  url: string;
  width: number;
  height: number;
};

export type TEntry = {
  title: string;
  description: string;
  programType: TEntryType;
  images: {
    "Poster Art": Image;
  };
  releaseYear: number;
};

export type EntryData = {
  total: number;
  entries: TEntry[];
};

// props for the Entry component
export type EntryProps = {
  title: TEntry["title"];
  imageUrl: TEntry["images"]["Poster Art"]["url"];
};

export type EntriesProps = {
  trimmedPath: string;
};
