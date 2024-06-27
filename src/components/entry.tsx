import React from "react";
import { EntryProps } from "../types/entry-types";

export default function Entry({ title, imageUrl }: EntryProps) {
  return (
    <li className="entry" key={title}>
      <div className="entry__image">
        <img src={imageUrl} alt={title} />
      </div>
      <span className="entry__title">{title}</span>
    </li>
  );
}
