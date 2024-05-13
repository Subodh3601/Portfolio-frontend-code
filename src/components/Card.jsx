/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "../styles/card.scss";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { frontendSelector, backendSelector, databaseSelector } from "../redux/reducer";


const Card = ({ image, value }) => {
  const divRef = useRef();
  const [skillPage, setSkillPage] = useState(false);
  const frontendData = useSelector(frontendSelector);
  const backendData = useSelector(backendSelector);
  const databaseData = useSelector(databaseSelector)

  let topics;
  switch (value) {
    case "frontend":
      topics = frontendData;
      break;
    case "backend":
      topics = backendData;
      break;
    case "database":
      topics = databaseData;
      break;
    default:
      topics = {};
  }

  const keys = Object.keys(topics);
  const values = Object.values(topics);

  // console.log("topics -----------", keys);
  // console.log("skillpage", values);

  const handleClick = () => {
    setSkillPage(!skillPage);
  };

  const handleClose = (e) => {
    if (e.target === divRef.current) {
      setSkillPage(false)
    }
  }
  return (
    <>
      <div className="card-container" onClick={handleClick}>
        <img src={image} alt="card" />
        <div className="card-container_innerdiv">
          <span>Click me</span>
        </div>
      </div>
      {skillPage && (
        <div
          className={`skills_details  ${skillPage ? "" : "hidePage"}`}
          ref={divRef}
          onClick={handleClose}
        >
          <table>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((key, index) => (
                <tr key={index}>
                  <td>
                    <div className="topic-name">{key}</div>
                    {/* <hr/> */}
                  </td>

                  <td>
                    <ul>
                      {values[index].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                      {/* <hr/> */}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Card;
