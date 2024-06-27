import React from "react";
import "../styles/_base.css";
import { entryTypes } from "./constants";
import { TEntryType } from "../types/entry-types";
import Entries from "../components/entries";

export default function EntriesSection() {
  //get path from the url
  const path = window.location.pathname;
  const trimmedPath = path.replace(/^\//, "") as TEntryType;
  const currentEntryType = entryTypes[trimmedPath];

  if (!currentEntryType) {
    console.log("Entry type not found.");
  }
  return (
    <>
      <header className="sub-header layout-padding">
        {currentEntryType.title}
      </header>
      <div className="layout-padding">
        <Entries trimmedPath={trimmedPath} />
      </div>
    </>
  );
}
