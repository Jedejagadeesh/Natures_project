import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function ProjectDetails() {
  return (
    <div className="project-container">
      {/* Main Title + Project Intro */}
      <h1 className="project-main-title" style={{ color: "#1E3A8A" }}>
        🌿 Protect Our Nature — Our Right 🌎
      </h1>
      <p className="project-intro-main" style={{ color: "#374151" }}>
        This project aims to raise awareness about protecting our environment. 🌱<br/>
        Students, farmers, and volunteers can contribute actively.<br/>
        Together, we can secure our mountains, lakes, and surroundings.
      </p>

      {/* Students Section */}
      <h2 className="project-heading-left student-heading" style={{ color: "#9333EA" }}>
        👩‍🎓 Students
      </h2>
      <p className="project-intro-left" style={{ color: "#4B5563" }}>
        <span className="highlight">Students</span>, this is our current nature. Protect it for the next generation. Every small action counts! 🌱<br/>
        Participate in tree plantation drives, clean local surroundings, and educate peers about eco-friendly practices.
      </p>
      <div className="project-flex-row">
        <div className="project-card">
          <img src="https://img.freepik.com/premium-vector/vector-drawing-earth-held-hands-captioned-preserve-our-planet-future-generations_912553-199.jpg?w=2000" alt="Students Planting" />
        </div>
        <div className="project-card">
          <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/67096/images/SUp4IjFZRbmNJOEhksVQ_file.jpg" alt="Students Cleaning" />
        </div>
        <div className="project-card">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/0Puv0Pss33M"
            title="Students Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Farmers Section */}
      <h2 className="project-heading-left farmer-heading" style={{ color: "#DC2626" }}>
        👨‍🌾 Farmers
      </h2>
      <p className="project-intro-left" style={{ color: "#4B5563" }}>
        Farmers, avoid harmful pesticides and do not cut trees unnecessarily. <span className="highlight">Plant trees</span> in your surroundings. Protect soil and water resources for a sustainable future.
      </p>
      <div className="project-flex-row">
        <div className="project-card">
          <img src="https://grist.org/wp-content/uploads/2023/01/India-agriculture-pesticides.jpg" alt="Farmers Planting" />
        </div>
        <div className="project-card">
          <img src="https://en-media.thebetterindia.com/uploads/2023/07/Untitled-design-1_11zon-1689838485.jpg" alt="Farmers Field" />
        </div>
        <div className="project-card">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/GLllZ-qiXJA"
            title="Farmers Video 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-card">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/lH_8N9HRsys"
            title="Farmers Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Volunteers Section */}
      <h2 className="project-heading-left others-heading" style={{ color: "#2563EB" }}>
        🌐 Volunteers & Others
      </h2>
      <p className="project-intro-left" style={{ color: "#4B5563" }}>
        Help by picking plastic/paper and disposing it properly. Clean lakes, streets, and surroundings. Every small effort counts! <span className="highlight">Eco-friendly actions</span> matter. Organize local campaigns and involve your community.
      </p>
      <div className="project-flex-row">
        <div className="project-card">
          <img src="https://static.vecteezy.com/system/resources/previews/021/934/440/original/people-collecting-garbage-on-beach-men-and-women-gathering-plastic-waste-in-trash-bags-volunteers-picking-up-trash-at-seaside-illustration-vector.jpg" alt="Volunteers Cleaning" />
        </div>
        <div className="project-card">
          <img src="https://www.rappler.com/tachyon/2024/07/trash01_ASIA-WASTE-PHILIPPINES-RICE.jpg" alt="Volunteers Street" />
        </div>
        <div className="project-card">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/HQTUWK7CM-Y"
            title="Volunteers Video 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-card">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/-rxDCutGo68"
            title="Volunteers Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Campaign Websites */}
      <h2 className="project-heading-left campaign-heading" style={{ color: "#F59E0B" }}>
        🌐 Recommended Campaign Websites
      </h2>
      <p className="project-intro-left" style={{ color: "#4B5563" }}>
        Learn, participate, and support these eco-friendly campaigns:
      </p>
      <ul className="campaign-links">
        <li><a href="https://www.wwf.org" target="_blank" rel="noreferrer">WWF - World Wildlife Fund</a></li>
        <li><a href="https://www.greenpeace.org" target="_blank" rel="noreferrer">Greenpeace</a></li>
        <li><a href="https://www.unep.org" target="_blank" rel="noreferrer">United Nations Environment Programme (UNEP)</a></li>
      </ul>

      {/* Contact Button */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <p style={{ fontSize: "1.1rem", color: "#374151" }}>
          If you want more details, contact us:
        </p>
        <Link
          to="/contact"
          className="contact-button"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#2563EB",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#1D4ED8"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#2563EB"}
        >
          Contact
        </Link>
      </div>

      {/* Footer Quote */}
      <footer className="project-footer" style={{ color: "#111827" }}>
        <h2>💚 “Protect nature — it’s our home and future 🌿🌎”</h2>
      </footer>
    </div>
  );
}
