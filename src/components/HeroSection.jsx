// import React from 'react'
import image from "../assets/hero-section.avif";
import "../styles/hero.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={image} />
      <h1>Subodh Singh</h1>
      <p>
        Mechanical Engineer | Web Developer
        <br />
        Interest in Machine Learning
      </p>
    </div>
  );
};

export default HeroSection;
