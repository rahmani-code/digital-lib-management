function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
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
  // return (
  //   <div className="hero-container">
  //     <img src={require("./assets/lib.jpeg")} alt="library" />

  //     <div className="hero-text">
  //       <h1>Digital Library Management System</h1>
  //       <h2>Manage Libraries Online</h2>
  //     </div>
  //   </div>
  // );

  //

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Digital Library Management System</h1>
        <h2>Manage Libraries Online</h2>
        <div className="hero-search-bar">
          <div className="tabs">
            <button className="active-tab">Book</button>
            <button>Author</button>
            <button>Publisher</button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter book name" />
            <button className="search-button">🔍</button>
          </div>
        </div>
      </div>
    </section>
  );
}
function SearchBar() {
  return;
}

export default App;
