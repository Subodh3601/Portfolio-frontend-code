// import React from 'react'
import "../styles/navbar.scss";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? "dark" : ""}`}>
      <img src="/logo.png" alt="Logo" />
      <ul className={`navbar_list ${show ? "showMenu" : "hideMenu"}`}>
        <li>
          <Link
            onClick={() => setShow(!show)}
            to="hero-section"
            activeClass="active"
            offset={0}
            smooth={true}
            duration={800}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShow(!show)}
            to="about-container"
            activeClass="active"
            offset={-100}
            smooth={true}
            duration={800}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setShow(!show)}
            to="skills-outer-container"
            activeClass="active"
            offset={-100}
            smooth={true}
            duration={800}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShow(!show)}
            to="project"
            activeClass="active"
            offset={-100}
            smooth={true}
            duration={800}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShow(!show)}
            to="certificates"
            activeClass="active"
            offset={-100}
            smooth={true}
            duration={800}
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShow(!show)}
            to="experience-heading"
            activeClass="active"
            offset={-100}
            smooth={true}
            duration={800}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShow(!show)}
            to="education-title"
            activeClass="active"
            offset={-105}
            smooth={true}
            duration={800}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShow(!show)}
            to="contacts-heading"
            activeClass="active"
            offset={-100}
            smooth={true}
            duration={800}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
