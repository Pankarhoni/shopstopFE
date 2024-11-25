import React from "react";
import "./Hero.css";
import hero_image from "../Assets/heroimg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>Collections</p>
          <p>for Everyone</p>
        </div>
        
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
