import React, { useState, useEffect } from "react";
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
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setEducation([
      { course: "Computer Science", school: "Jomo Kenyatta University" },
      { course: "Mechanical Engineering", school: "Jomo Kenyatta University" },
    ]);

    setExperience([
      {
        title: "CAD & Simulation",
        duration: "July 2021 - July 2022",
      },
      { title: "3D modelling", duration: "2 Months" },
    ]);

    setSkills([
      {
        skill: "INVENTOR",
        expertise: 80,
      },

      {
        skill: "AUTOCAD",
        expertise: 80,
      },

      {
        skill: "SIEMENS NX",
        expertise: 90,
      },
    ]);
  }, []);

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

          {education.map((education) => (
            <>
              <h4>{education.course}</h4>
              <p>{education.school}</p>
            </>
          ))}
        </div>
        {/* EXPERIENCE */}
        <div className="app__skills-size app__skills-experience">
          <h2 className="head-s-text">EXPERIENCE</h2>
          <div className="head__line"></div>
          {experience.map((experience) => (
            <>
              <h4>{experience.title}</h4>
              <span className="duration">{experience.duration}</span>
            </>
          ))}
        </div>
        {/* </div> */}

        <div className="app__skills-size app___skills-skills">
          <h2 className="head-s-text">SKILLS</h2>
          <div className="head__line"></div>

          {skills.map((experience) => (
            <div style={{ width: "320px", padding: 20 }}>
              <h4>{experience.skill}</h4>
              <ProgressBar now={experience.expertise} />
            </div>
          ))}
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
