/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import { useState } from "react";
import "../styles/education.scss";
import image from "../assets/lpu.png";
import image2 from "../assets/sainikSchool.png";

const Education = () => {
  const [isHovered, setIsHovered] = useState("");

  return (
    <div className="education-title">
      <h2>EDUCATION</h2>
      <div className="education">
        <div className="education-left">
          <div
            className="left"
            onMouseEnter={() => setIsHovered("btech")}
            onMouseLeave={() => setIsHovered("")}
          >
            B.TECH
          </div>
          <div
            className="left"
            onMouseEnter={() => setIsHovered("higher-secondary")}
            onMouseLeave={() => setIsHovered("")}
          >
            Higher-Secondary
          </div>
          <div
            className="left"
            onMouseEnter={() => setIsHovered("secondary")}
            onMouseLeave={() => setIsHovered("")}
          >
            Secondary
          </div>
        </div>
        <div className="education-right">
          <p className="saying">
            "Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today." <p>Malcolm X</p>
          </p>
          <div
            className={`right ${
              isHovered === "btech" ? "visible" : "not-visible"
            } `}
          >
            <h1>
              <a href="https://www.lpu.in/" target="_blank">
                <img src={image} alt="lpuLogo" />
              </a>
              Lovely Professional University
            </h1>
            <h2>Mechanical Engineering</h2>
            <h3>2012-2016</h3>
            <h2>CGPA: 8.92</h2>
          </div>
          <div
            className={`right ${
              isHovered === "higher-secondary" ? "visible" : "not-visible"
            } `}
          >
            <h1>
              <a href="https://www.sainikschoolrewa.ac.in/" target="blank">
                <img src={image2} />
              </a>
              Sainik School Rewa
            </h1>
            <h3>2010-2011</h3>
            <h2>Result: 66.6%</h2>
          </div>
          <div
            className={`right ${
              isHovered === "secondary" ? "visible" : "not-visible"
            } `}
          >
            <h1>
              <a href="https://www.sainikschoolrewa.ac.in/" target="blank">
                <img src={image2} />
              </a>
              Sainik School Rewa
            </h1>
            <h3>2008-2009</h3>
            <h2>Result: 79.8%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
