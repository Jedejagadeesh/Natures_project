import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-intro">
        Our mission is to protect and restore our planet’s natural balance. We
        believe that every small step taken together can bring a big change.
      </p>

      {/* Section 1: Protect Nature */}
      <div className="about-item">
        <h2>How to Protect Our Nature</h2>
        <div className="about-content">
          <p>
            <span className="highlight">Plant more trees</span> and avoid cutting existing ones unnecessarily.
            Trees purify the air, provide oxygen, and support biodiversity.
          </p>
          <div className="image-row">
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/11/plant-trees-1573373661.jpg" alt="Planting Trees" className="hover-img" />
            <img src="https://img.freepik.com/premium-photo/planting-trees-reduce-co2-emissions-increase-oxygen-clean-air-environmental-protection-concept-forest-nature-conservation-concept_233554-990.jpg" alt="Planting Trees" className="hover-img" />
            <img src="https://as2.ftcdn.net/v2/jpg/05/28/97/93/1000_F_528979360_Qff2gnzygYq4qaaVxCBFVTuazAaAlNiy.jpg" alt="Planting Trees" className="hover-img" />
            <img src="https://i.ytimg.com/vi/LAd9siKz4Dc/maxresdefault.jpg" alt="Planting Trees" className="hover-img" />
          </div>
        </div>
      </div>

      {/* Section 2: Reduce Pollution */}
      <div className="about-item">
        <h2>Reduce Pollution</h2>
        <div className="about-content">
          <p>
            <span className="highlight">Reduce pollution</span> by minimizing waste and keeping rivers and streets
            clean. Avoid plastic usage and promote eco-friendly alternatives.
          </p>
          <div className="image-row">
            <img src="https://png.pngtree.com/template/20221227/ourlarge/pngtree-reduce-ocean-and-sea-plastic-waste-pollution-infographic-image_1879290.jpg" alt="Reduce Pollution" className="hover-img" />
            <img src="https://dotenvironment.net/wp-content/uploads/2017/12/How-to-reduce-pollution-1024x683.jpg" alt="Reduce Pollution" className="hover-img" />
            <img src="https://tse2.mm.bing.net/th/id/OIP.mHO4skP4o22HitP2nxtHagHaDL?pid=Api&P=0&h=180" alt="Reduce Pollution" className="hover-img" />
            <img src="https://www.implasticfree.com/wp-content/uploads/2022/10/River-Cleaning.jpg" alt="Reduce Pollution" className="hover-img" />
          </div>
        </div>
      </div>

      {/* Section 3: Educate and Protect Wildlife */}
      <div className="about-item">
        <h2>Educate and Protect Wildlife</h2>
        <div className="about-content">
          <p>
            <span className="highlight">Educate others</span> and take small steps daily to protect wildlife and
            natural habitats. Together we can ensure a greener and safer future.
          </p>
          <div className="image-row">
            <img src="https://tse4.mm.bing.net/th/id/OIP.w53YpYvBfXqLopN0HJkbGAHaEK?pid=Api&P=0&h=180" alt="Protect Wildlife" className="hover-img" />
            <img src="https://www.green.earth/hs-fs/hubfs/7%20strategies%20for%20Protecting%20Wildlife-Pillar%20%20Protecting%20Vital%20Habitats_visual%201.png?width=1800&height=1200&name=7%20strategies%20for%20Protecting%20Wildlife-Pillar%20%20Protecting%20Vital%20Habitats_visual%201.png" alt="Protect Wildlife" className="hover-img" />
            <img src="https://tse3.mm.bing.net/th/id/OIP.4O7IV_-15bvpys3LG1-NTAHaF7?pid=Api&P=0&h=180" alt="Protect Wildlife" className="hover-img" />
            <img src="https://tse1.mm.bing.net/th/id/OIP.EyyzFdQFSEhy7K1tlPFlAgHaGN?pid=Api&P=0&h=180" alt="Protect Wildlife" className="hover-img" />
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <footer className="footer-quote">
        <h2>Dear friends, protect our nature — it's in our hands 🌿🌎🌱🍀</h2>
      </footer>
    </div>
  );
}

export default About;
