import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/bk" element={<SingleBook />} />
        </Routes>
      </Router>
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">DIGITAL LIBRARY</span>
      </div>

      <ul className="links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#books">Books</a>
        </li>
        <li>
          <a href="#user-login">User Login</a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Digital Library Management System</h1>
        <h2>Manage Libraries Online</h2>

        <Search />
      </div>
    </section>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search book, author or isbn..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default App;
