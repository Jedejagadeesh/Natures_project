import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Causes from "./Causes";
import Contact from "./Contact";
import ProjectDetails from "./ProjectDetails";
import "./App.css";
function Home() {
  return (
    <section className="middle-section">
      <div className="center-msg">
        <h2>🌎 Protect Our Nature 🌳</h2>
        <p>
          Let’s unite to save trees, rivers, and wildlife. Every small action makes a big difference!
        </p>
        <Link to="/project" className="btn btn-primary">
          More Details
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="top-section">
          <div className="logo-title">
            <div className="logo">🌿</div>
            <span className="title">EcoConnect</span>
          </div>

          {/* Navbar */}
        <nav className="nav-items">
  <Link className="nav-btn" to="/">Home</Link>
  <Link className="nav-btn" to="/about">About</Link>
  <Link className="nav-btn" to="/causes">Causes</Link>
  <Link className="nav-btn" to="/contact">Contact</Link>
</nav>

        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
