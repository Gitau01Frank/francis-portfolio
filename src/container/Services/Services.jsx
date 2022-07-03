import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Services.scss";

const Services = () => {
  const [services, setServices] = useState([
    {
      title: "Websites & Web Application Improvement",
      description:
        "I take previously developed websites and web applications to the next level.",
      imageUrl:
        "https://freds-portfolio.s3.ap-southeast-1.amazonaws.com/AboutUs-1652489652648.jpeg",
    },
    {
      title: "Websites & Web Application Improvement",
      description:
        "I take previously developed websites and web applications to the next level.",
      imageUrl:
        "https://freds-portfolio.s3.ap-southeast-1.amazonaws.com/AboutUs-1652489652648.jpeg",
    },
    {
      title: "Websites & Web Application Improvement",
      description:
        "I take previously developed websites and web applications to the next level.",
      imageUrl:
        "https://freds-portfolio.s3.ap-southeast-1.amazonaws.com/AboutUs-1652489652648.jpeg",
    },
  ]);

  return (
    <>
      <div className="app__container app__about">
        <h2 className="head-text">MY SERVICES</h2>
        <div className="head__line"></div>

        <div className="app__profiles">
          {services.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item "
              key={about.title + index}
            >
              <img src={about.imageUrl} alt={about.title} />
              <h2>{about.title}</h2>
              <p>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Services, "app__about"), "services");
