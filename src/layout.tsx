import React from "react";
import Header from "./components/header";
import "./styles/layout.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <main className="layout__main">{children}</main>
    </div>
  );
}
