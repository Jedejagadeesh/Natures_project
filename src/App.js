import React, { useState } from "react";
import "./App.css";
import About from "./About";
import Causes from "./Causes";
import Contact from "./Contact";
import ProjectDetails from "./ProjectDetails";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="App">
      {/* Header Section */}
      <header className="top-section">
        <div className="logo-title">
          <div className="logo">🌿</div>
          <span className="title">Verdantia</span>
        </div>

        {/* Navbar with buttons */}
        <nav className="nav-items">
          <button
            className={activeSection === "home" ? "btn btn-primary" : "btn btn-danger"}
            onClick={() => setActiveSection("home")}
          >
            Home
          </button>
          <button
            className={activeSection === "about" ? "btn btn-primary" : "btn btn-danger"}
            onClick={() => setActiveSection("about")}
          >
            About
          </button>
          <button
            className={activeSection === "causes" ? "btn btn-primary" : "btn btn-danger"}
            onClick={() => setActiveSection("causes")}
          >
            Causes
          </button>
          <button
            className={activeSection === "project" ? "btn btn-primary" : "btn btn-danger"}
            onClick={() => setActiveSection("project")}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {activeSection === "home" && (
          <section className="middle-section">
            <div className="center-msg">
              <h2>🌎 Protect Our Nature 🌳</h2>
              <p>
                Let’s unite to save trees, rivers, and wildlife. Every small action makes a big difference!
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setActiveSection("project")}
              >
                More Details
              </button>
            </div>
          </section>
        )}

        {activeSection === "project" && <ProjectDetails />}
        {activeSection === "about" && <About />}
        {activeSection === "causes" && <Causes />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;
