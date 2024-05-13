// import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "../styles/contacts.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://poerfolio-backend-for-render.onrender.com/sendEmail",
        {
          name,
          email,
          phone,
          msg,
        }
      );

      // console.log("data",data)
      setStatus(data.message);
      setEmail("");
      setPhone("");
      setName("");
      setMsg("");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error sending email. Please try again.");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setStatus("");
    }, 3000);
  }, [status]);
  return (
    <>
      <div className="contacts-heading">
        <h2>CONTACTS</h2>
        <div className="contacts">
          <div className="contacts-left">
            <h3>Contacts Detail</h3>
            <a style={{ cursor: "default" }}>
              <FaPhoneAlt />
              <span>
                <b>7415888360</b>
              </span>
            </a>
            <br />
            <a style={{ cursor: "default" }}>
              <SiGmail />
              <span>subodhsingh360@gmail.com</span>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/subodh-singh-96528029a/"
              target="_blank"
              style={{ color: "blueviolet" }}
            >
              <FaLinkedin style={{ color: "black" }} />
              <span>Linkedin</span>
            </a>
            <br />
            <a
              href="https://github.com/Subodh3601"
              target="_blank"
              style={{ color: "blueviolet" }}
            >
              <FaGithub style={{ color: "black" }} />
              <span>github</span>
            </a>
          </div>
          <div className="contacts-right">
            <h3>Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <br />
              <input
                required
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="email">Email: </label>
              <br />
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="phone">Mobile: </label>
              <br />
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <label htmlFor="msg">Message: </label>
              <br />
              <textarea
                required
                id="msg"
                name="msg"
                rows="8"
                cols="58"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <br />
              {status && (
                <p
                  className={`${
                    status == "Message Send" ? "send" : "not-send"
                  }`}
                >
                  {status}
                </p>
              )}
              <button type="submit">Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
