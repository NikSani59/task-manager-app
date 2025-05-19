import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <header className="header-container">
      <div className="header-title">
        <Link to="/">
          <h1>Task Manager</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="#" className="nav-link">About</Link>
        <Link to="#" className="nav-link">Terms Of Service</Link>
        <Link to="#"  className="nav-link">FAQ</Link>
      </nav>
    </header>
  );
}

export default NavBar;
