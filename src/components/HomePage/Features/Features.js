import React from "react";
import "./Features.css";
import ParticlesBackground from "../../ParticlesBackground";

const Features = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="features-parent">
        <div className="head-info">
          <h1>Why Choose Us?</h1>
          <p className="head-p">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt labore dolore magna aliqua suspendisse
          </p>
        </div>
        <div className="feature-box">
          <div className="row-features">
            <div className="features">
              <i class="fa-solid fa-laptop-code"></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="features">
              <i class="fa-solid fa-laptop-code"></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="features">
              <i class="fa-solid fa-laptop-code"></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="features">
              <i class="fa-solid fa-laptop-code"></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="features">
              <i class="fa-solid fa-laptop-code"></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="features">
              <i class="fa-solid fa-laptop-code"></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
