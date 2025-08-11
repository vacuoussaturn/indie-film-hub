import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Watch from "./pages/Watch";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  useEffect(() => {
    // Listen for storage changes from other tabs/windows
    function syncAuth(e) {
      if (e.key === "authToken") {
        setAuthToken(e.newValue);
      }
    }
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  function handleLogout() {
    localStorage.removeItem("authToken");
    setAuthToken(null);
  }

  return (
    <Router>
      

      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/browse" style={{ margin: "0 1rem" }}>Browse Films</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        {authToken ? (
          <Link to="/profile" style={{ margin: "0 1rem" }}>Profile</Link>
        ) : (
          <>
            <Link to="/login" style={{ margin: "0 1rem" }}>Profile</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
