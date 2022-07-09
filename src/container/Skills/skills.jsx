import React from "react";
import "./skills.scss";
// import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./skills.scss";
// import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";

import "bootstrap/dist/css/bootstrap.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  // const [Wexperiences, setWExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);
  // const [experiences, setExperiences] = useState([]);
  // const [countOfProgess, setCountOfProgess] = useState(50);

  return (
    <>
      <h2 className="head-s-text">
        Skills & <span>Experiences</span>
      </h2>
      <div className="head__line"></div>

      <div className="app__skills-container">
        {/* <div className="app__skills-size app__skills-list"> */}
        {/* EDUCATION */}

        <div className="app__skills-size app__skills-education">
          <h2 className="head-s-text">EDUCATION</h2>
          <div className="head__line"></div>

          <h4>Computer Science</h4>
          <p>Jomo Kenyatta University</p>

          <h4>Mechatronic Engineering</h4>
          <p>Dedan Kimathi University</p>
        </div>
        {/* EXPERIENCE */}
        <div className="app__skills-size app__skills-experience">
          <h2 className="head-s-text">EXPERIENCE</h2>
          <div className="head__line"></div>

          <h4>CAD,3D modelling and Simulation</h4>
          <p>5 Years Experience</p>

          <h4>CAD,3D modelling and Simulation</h4>
          <p>5 Years Experience</p>

          <h4>CAD,3D modelling and Simulation</h4>
          <p>5 Years Experience</p>
        </div>
        {/* </div> */}

        <div className="app__skills-size app___skills-skills">
          <h2 className="head-s-text">SKILLS</h2>
          <div className="head__line"></div>

          <div style={{ width: "320px", padding: 20 }}>
            <h4> INVENTOR</h4>
            <ProgressBar now={80} />
          </div>
          <div style={{ width: "320px", padding: 20 }}>
            <h4> AutoCAD</h4>
            <ProgressBar now={80} />
          </div>
          <div style={{ width: "320px", padding: 20 }}>
            <h4>KiCAD</h4>
            <ProgressBar now={90} />
          </div>

          <div style={{ width: "320px", padding: 20 }}>
            <h4>SIEMENS NX</h4>
            <ProgressBar now={90} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
