import React from "react";
import "./App.css";

export default function ProjectDetails() {
  return (
    <div className="project-container">
      {/* Main Title + Project Intro */}
      <h1 className="project-main-title">
        🌿 Protect Our Nature — Our Right 🌎
      </h1>
      <p className="project-intro-main">
        This project aims to raise awareness about protecting our environment. 🌱<br/>
        Students, farmers, and volunteers can contribute actively.<br/>
        Together, we can secure our mountains, lakes, and surroundings.
      </p>

      {/* Students Section */}
      <h2 className="project-heading-left student-heading">👩‍🎓 Students</h2>
      <p className="project-intro-left">
        <span className="highlight">Students</span>, this is our current nature. Protect it for the next generation. Every small action counts! 🌱<br/>
        Participate in tree plantation drives, clean local surroundings, and educate peers about eco-friendly practices.
      </p>
      <div className="project-flex-row">
        <div className="project-card hover-front">
          <img src="https://img.freepik.com/premium-vector/vector-drawing-earth-held-hands-captioned-preserve-our-planet-future-generations_912553-199.jpg?w=2000" alt="Students Planting" />
        </div>
        <div className="project-card hover-front">
          <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/67096/images/SUp4IjFZRbmNJOEhksVQ_file.jpg" alt="Students Cleaning" />
        </div>
        <div className="project-card hover-front">
          <video controls width="200">
            <source src="https://youtu.be/6x8IuJlcXTk?si=Gf8VhmiArdjC8nXK" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Farmers Section */}
      <h2 className="project-heading-left farmer-heading">👨‍🌾 Farmers</h2>
      <p className="project-intro-left">
        Farmers, avoid harmful pesticides and do not cut trees unnecessarily. <span className="highlight">Plant trees</span> in your surroundings. Protect soil and water resources for a sustainable future.
      </p>
      <div className="project-flex-row">
        <div className="project-card hover-front">
          <img src="https://grist.org/wp-content/uploads/2023/01/India-agriculture-pesticides.jpg" alt="Farmers Planting" />
        </div>
        <div className="project-card hover-front">
          <img src="https://en-media.thebetterindia.com/uploads/2023/07/Untitled-design-1_11zon-1689838485.jpg" alt="Farmers Field" />
        </div>
        <div className="project-card hover-front">
          <video controls width="200">
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="project-card hover-front">
          <video controls width="200">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Others / Volunteers Section */}
      <h2 className="project-heading-left others-heading">🌐 Volunteers & Others</h2>
      <p className="project-intro-left">
        Help by picking plastic/paper and disposing it properly. Clean lakes, streets, and surroundings. Every small effort counts! <span className="highlight">Eco-friendly actions</span> matter. Organize local campaigns and involve your community.
      </p>
      <div className="project-flex-row">
        <div className="project-card hover-front">
          <img src="https://static.vecteezy.com/system/resources/previews/021/934/440/original/people-collecting-garbage-on-beach-men-and-women-gathering-plastic-waste-in-trash-bags-volunteers-picking-up-trash-at-seaside-illustration-vector.jpg" alt="Volunteers Cleaning" />
        </div>
        <div className="project-card hover-front">
          <img src="https://www.rappler.com/tachyon/2024/07/trash01_ASIA-WASTE-PHILIPPINES-RICE.jpg" alt="Volunteers Street" />
        </div>
        <div className="project-card hover-front">
          <video controls width="200">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="project-card hover-front">
          <video controls width="200">
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Campaign Websites */}
      <h2 className="project-heading-left campaign-heading">🌐 Recommended Campaign Websites</h2>
      <p className="project-intro-left">
        Learn, participate, and support these eco-friendly campaigns:
      </p>
      <ul className="campaign-links">
        <li><a href="https://www.wwf.org" target="_blank" rel="noreferrer">WWF - World Wildlife Fund</a></li>
        <li><a href="https://www.greenpeace.org" target="_blank" rel="noreferrer">Greenpeace</a></li>
        <li><a href="https://www.unep.org" target="_blank" rel="noreferrer">United Nations Environment Programme (UNEP)</a></li>
      </ul>

      {/* Footer Quote */}
      <footer className="project-footer">
        <h2>💚 “Protect nature — it’s our home and future 🌿🌎”</h2>
      </footer>
    </div>
  );
}
