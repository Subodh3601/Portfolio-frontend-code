// import React from 'react'
import "../styles/project.scss";
import { FaRegCirclePlay } from "react-icons/fa6";
import readmeImg from "../assets/readme.webp";
import otherProjectImg from "../assets/otherProject.jpg";
import projectImg from "../assets/projectimg.jpg";
import { useRef, useState } from "react";
import document from "../assets/4wheel.pdf";
import vector from "../assets/Vector.png";
// Core viewer
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Project = () => {
  const [videoDisplay, setVideoDisplay] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const videoRef = useRef();
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const closePlayer = (e) => {
    if (e.target === videoRef.current) {
      setVideoDisplay(false);
    }
  };
  return (
    <>
      <div className="project">
        <h3>PROJECTS</h3>
        <div className="projects">
          <div className="projects-left">
            <h2>Project video</h2>

            <div className="projects-left-outerdiv">
              <div
                className="projects-left-videoDiv"
                onClick={() => setVideoDisplay(true)}
              >
                <div className="overlay">
                  <FaRegCirclePlay />
                </div>
                <img src={projectImg} alt="project logo" />
              </div>

              <div
                className="projects-left-readme"
                onClick={() => setShowPdf(true)}
              >
                <a>
                  <img src={readmeImg} alt="reamd me logo" />
                  <h3>README</h3>
                </a>
              </div>
            </div>

            <a
              href="https://github.com/Subodh3601/4Wheel.com-Complete-codebase/tree/master"
              target="_blank"
            >
              <span>GitHub Link</span>
            </a>
          </div>

          <div className="projects-right">
            <h2>Other Projects</h2>
            <div className="projects-right-desc">
              <a
                href="https://github.com/Subodh3601?tab=repositories"
                target="_blank"
              >
                <img src={otherProjectImg} alt="other Project logo" />
                <h3>Github</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      {videoDisplay && (
        <div className="video-outer-div" ref={videoRef} onClick={closePlayer}>
          {/* <video
            src="https://drive.google.com/file/d/1E3K_V2yM3tdi05UEBHkn1YXyMucawBTa/view?usp=sharing"
            type="video/mp4"
            controls
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video> */}
          <iframe
            src="https://drive.google.com/file/d/1E3K_V2yM3tdi05UEBHkn1YXyMucawBTa/preview"
            width="640"
            height="480"
            style={{
              position: "fixed",
              top: "25%",
              left: "25%",
              zIndex: "100000000",
            }}
            allow="autoplay"
          ></iframe>
        </div>
      )}

      {showPdf && (
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
          <div className="pdf-viewer-outer" style={{ zIndex: "9999" }}>
            <div className="close-pdf" onClick={() => setShowPdf(false)}>
              <span> X</span>
            </div>
            <Viewer
              fileUrl={document}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      )}
    </>
  );
};

export default Project;
