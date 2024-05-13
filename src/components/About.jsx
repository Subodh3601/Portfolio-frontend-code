/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import image from "../assets/photo 1.jpg";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>Meet Subodh Singh</h1>

      </div>
      <div className="about">
        <div className="about_left">
          <p>
            Greetings! I'm Subodh Singh, a Mechanical Engineer with a newfound
            passion for crafting exceptional web experiences. Transitioning from
            the world of mechanical engineering, I embarked on an enriching
            journey into the realm of full stack development.
          </p>
          <br />
          <p>
            I recently completed my{" "}
            <b>
              <u>
                <i style={{ color: "red" }}>MERN</i>
              </u>
            </b>{" "}
            stack course from{" "}
            <b>
              <u>
                <i style={{ color: "red" }}>Coding Ninjas</i>
              </u>
            </b>
            , where I honed my skills in building robust and scalable web
            applications. In the frontend, I have a strong understanding of
            HTML, CSS, and JavaScript, which enables me to create beautiful and
            interactive user interfaces. Additionally, I'm proficient in React,
            allowing me to develop dynamic and responsive web applications.
          </p>
          <br />
          <p>
            On the backend, I'm well-versed in Node.js and Express.js, which
            empower me to build efficient and reliable server-side applications.
            I also have experience working with databases, including MongoDB and
            MYSQL, where I manage data efficiently to ensure smooth application
            functionality.
          </p>
          <br />
          <p>
            Driven by curiosity and fueled by a passion for innovation, I'm
            eager to embark on new challenges and contribute my expertise to
            impactful projects.
          </p>
        </div>
        <div className="about_right">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default About;
