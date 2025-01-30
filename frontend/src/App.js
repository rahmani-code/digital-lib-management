import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import SingleBook from "./components/SingleBook1";
import { SearchResultsList } from "./components/searchResultsList";
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
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="#user-login">User Login</a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  const [results, setResults] = useState([]);
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Digital Library Management System</h1>
        <h2>Manage Libraries Online</h2>

        <Search setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </section>
  );
}

function Search({ setResults }) {
  const [query, setQuery] = useState("");

  const fetchData = async (value) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${value}`
      );
      const data = await response.json();

      console.log("Fetched Data:", data); // Debugging

      const results = data.docs.map((book) => ({
        id: book.key,
        title: book.title,
      }));

      setResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value) => {
    setQuery(value);
    if (value.trim() !== "") {
      fetchData(value);
    } else {
      setResults([]);
    }
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search book, author or isbn..."
      value={query}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

// function Search({ setResults }) {
//   const [query, setQuery] = useState("");

//   const fetchData = async (value) => {
//     try {
//       const response = await fetch(
//         `https://openlibrary.org/search.json?q=${value}`
//       );
//       const data = await response.json();

//       console.log("Fetched Data:", data);

//       // Transform the API response into an array of books
//       const results = Object.keys(data)
//         .map((key) => ({
//           id: key, // Use the identifier as an ID
//           title: data[key].title || "No Title Available", // Provide a fallback for missing titles
//         }))
//         .filter((book) =>
//           book.title.toLowerCase().includes(value.toLowerCase())
//         );

//       setResults(results);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // const fetchData = async (value) => {
//   //   await fetch(
//   //     "https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json"
//   //   )
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       const results = Object.values(data).flat().filter((book) => {
//   //         return (
//   //           value &&
//   //           book &&
//   //           book.title &&
//   //           book.title.toLowerCase().includes(value)
//   //         );
//   //       });
//   //       setResults(results);
//   //     });
//   // };

//   // const handleChange = (value) => {
//   //   setQuery(value);
//   //   fetchData(value);
//   // };

//   const handleChange = (value) => {
//     setQuery(value); // Update the search query state
//     if (value.trim() !== "") {
//       fetchData(value); // Only fetch data if value is not empty
//     } else {
//       setResults([]); // Clear results for empty input
//     }
//   };

//   return (
//     <input
//       className="search"
//       type="text"
//       placeholder="Search book, author or isbn..."
//       value={query}
//       onChange={(e) => handleChange(e.target.value)}
//     />
//   );
// }

export default App;
