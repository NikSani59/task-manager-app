import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <header className="header-container">
      <div className="header-title">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Task Manager</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="#" className="nav-link">Terms Of Service</Link>
        <Link to="#" className="nav-link">FAQ</Link>
        <button className="dark-toggle-btn" onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
