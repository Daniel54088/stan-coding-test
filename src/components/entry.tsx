import React from "react";
import { EntryProps } from "../types/entry-types";

const Entry = React.memo(
  ({ title, imageUrl }: EntryProps) => {
    return (
      <li className="entry" key={title}>
        <div className="entry__image">
          <img src={imageUrl} alt={title} />
        </div>
        <span className="entry__title">{title}</span>
      </li>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.title === nextProps.title &&
      prevProps.imageUrl === nextProps.imageUrl
    );
  }
);

export default Entry;
