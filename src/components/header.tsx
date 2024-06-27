import React from "react";
import "../styles/header.css";

const routes = [
  { path: "/login", label: "Log in", className: "button" },
  {
    path: "/free-trial",
    label: "Start your free trial",
    className: "button button--secondary",
  },
];

export default function Header() {
  return (
    <header className="header layout-padding">
      <h1>DEMO Streaming</h1>
      <nav className="header__nav">
        <ul className="header__list">
          {routes.map((route) => (
            <li key={route.path}>
              <a className={route.className}>{route.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
