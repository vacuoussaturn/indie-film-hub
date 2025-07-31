import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Watch from "./pages/Watch";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div style={{ background: "#444", color: "white", padding: "0.5rem", textAlign: "center" }}>
  Logged in as <strong>Sam</strong> (simulated)
</div>

      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/browse" style={{ margin: "0 1rem" }}>Browse Films</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
