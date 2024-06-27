import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./containers/home";
import EntriesSection from "./containers/entries-section";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<EntriesSection />} />
          <Route path="/movie" element={<EntriesSection />} />
        </Routes>
      </Layout>
    </Router>
  );
}
