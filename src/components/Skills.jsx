/* eslint-disable no-undef */
// import React from 'react'
import "../styles/skills.scss";
import Card from "./Card";
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import databases from '../assets/database.png';



const Skills = () => {
  

  return (
    <div className="skills-outer-container">
      <div className="skills-heading">
        <h3>SKILLS</h3>
      </div>
      <div className="skills">
        <div className="skills-card">
          <Card image={frontend} value={"frontend"} />
          <Card image={backend} value={"backend"} />
          <Card image={databases} value={"database"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
