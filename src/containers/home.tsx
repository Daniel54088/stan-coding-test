import React from "react";
import "../styles/_base.css";
import placeholder from "../../public/placeholder.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="sub-header layout-padding">Popular Titles</header>
      <div className="home layout-padding">
        <ul className="list">
          <li className="entry">
            <Link to="/series">
              <div className="entry__image entry__image--category">
                <img src={placeholder} alt="Placeholder" />
                <span>SERIES</span>
              </div>
            </Link>
            <span className="entry__title">Popular Series</span>
          </li>
          <li className="entry">
            <Link to="/movie">
              <div className="entry__image entry__image--category">
                <img src={placeholder} alt="Placeholder" />
                <span>MOVIES</span>
              </div>
            </Link>
            <span className="entry__title">Popular Movies</span>
          </li>
        </ul>
      </div>
    </>
  );
}
