import React from "react";
import "./AboutUs.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
const AboutUs = () => {
  return (
    <>
      <div className="app__container app__about">
        {/* THIS IS THE FIRST BIT ABOUT THE HEADING. */}
        <h2 className="head-s-text">WHO AM I?</h2>
        <div className="head__line"></div>
        {/* THE PAGES CONTENT */}

        <div className="app__content app__flex">
          <img src={images.profile2} alt="Franci's" />

          <p className="p-s-text">
            Warm Greeting.I am an electrical engineering student at Jomo
            Kenyatta University of Technology with ample experience in circuit
            design, PCB design and fabrication, control as well as automation
            engineering. To check out what i have been involved in before check
            out my blog pages, project page, and contact page.
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(AboutUs, "about", "app__whitebg");
