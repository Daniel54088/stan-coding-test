import React, { useEffect, useState } from "react";
import { TEntry, EntriesProps } from "../types/entry-types";
import Entry from "./entry";
import Loading from "./loading";
import Error from "./error";
import { fetchEntriesData } from "../utils/fetch-entries";

export default function Entries({ trimmedPath }: EntriesProps) {
  const [filteredEntries, setFilteredEntries] = useState<TEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchEntriesData(trimmedPath, setFilteredEntries, setLoading, setError);
  }, [trimmedPath]);

  if (error) {
    return <Error />;
  }

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
