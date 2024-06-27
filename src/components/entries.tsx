import React, { useEffect, useState } from "react";
import { TEntry, EntriesProps } from "../types/entry-types";
import Entry from "./entry";
import Loading from "./loading";
import { fetchEntriesData } from "../utils/fetch-entries";

export default function Entries({ trimmedPath }: EntriesProps) {
  const [filteredEntries, setFilteredEntries] = useState<TEntry[]>([]);
  const [loading, setLoading] = useState(false);
  // throw new Error("Test error");
  useEffect(() => {
    fetchEntriesData(trimmedPath, setFilteredEntries, setLoading);
  }, [trimmedPath]);

  return (
    <ul className="list">
      {loading ? (
        <Loading />
      ) : (
        <>
          {filteredEntries.map((entry) => (
            <Entry
              key={entry.title}
              title={entry.title}
              imageUrl={entry.images["Poster Art"].url}
            />
          ))}
        </>
      )}
    </ul>
  );
}
