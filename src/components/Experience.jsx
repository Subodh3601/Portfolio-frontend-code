/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import p1 from "../assets/anglo.jpg";
import "../styles/experience.scss";

const Experience = () => {
  return (
    <div className="experience-heading">
      <h3>EXPERIENCE</h3>

      <div className="experience">
        <div className="experience-left">
          <h2>ANGLO-EASTERN PTV. LTD.</h2>
          <h4>JUNE-2016 TO OCT-2018</h4>
          <h2>Junior- Engineer</h2>
          <p>
            Through campus placement, i was placed as trainiee engineer and got
            promoted to junior engineer. I had the responsibility of assisting
            in maitaining the Engine Room machinery, such as
            <ul>
              <li>Main Engine System</li>
              <li>Boiler System</li>
              <li>Fresh Water System</li>
              <li>Compressor System</li>
              <li>Generator System</li>
              <li>Cooling Water System</li>
              <li>Purifier System</li>
            </ul>
          </p>
          <p>
            <b>Achievement:</b> "Acknowledging my proficiency and adherence to
            safety protocols, the ship's supervisor promoted me to the role of
            4th Engineer aboard, even prior to my examination. My unique
            expertise in this domain distinguished me as the sole candidate for
            such responsibilities. In recognition of my contributions, I was
            tasked with leading a team of oilers in the maintenance and
            operation of the PURIFIER and COMPRESSOR systems."
          </p>
        </div>
        <div className="experience-right">
          <a href="https://www.angloeastern.com/" target="_blank">
            <img src={p1} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
