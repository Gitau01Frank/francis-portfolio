import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Services.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices([
      {
        title: "Cloud Computing",
        description: "I enjoy learning and interacting with cloud computing.",
        imageUrl:
          "https://techmoran.com/wp-content/uploads/2021/03/960x0-6.jpg",
      },

      {
        title: "Embedded Software Design",
        description: "I enjoy designing embedded softwares.",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrW3mqO5acnbMZqGzuszx2gV6e-ohSRf8rgUD91uyTKz25SUHbBkVd5u_kEoGZeyLFKE&usqp=CAU",
      },

      {
        title: "Embedded Firmware Programming",
        description: "I enjoy commmunication with embedded systems via code.",
        imageUrl:
          "https://freds-portfolio.s3.ap-southeast-1.amazonaws.com/AboutUs-1652489652648.jpeg",
      },
    ]);
  }, []);

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
              className="app__profile-item"
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
