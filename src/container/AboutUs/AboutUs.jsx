import React from "react";
import "./AboutUs.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
const AboutUs = () => {
  return (
    <>
      <div className="app__container app__about">
        {/* THIS IS THE FIRST BIT ABOUT THE HEADING. */}
        <h2 className="head-s-text">ABOUT ME</h2>
        <div className="head__line"></div>
        {/* THE PAGES CONTENT */}

        <div className="app__content app__flex">
          <img src={images.mainProfile} alt="Franci's" />

          <p className="p-s-text">
            Warm Greeting.I am an electronics and computer engineering student
            at Jomo Kenyatta University of Technology who enjoys interacting
            with embedded systems as well as cloud computing. Check on what I
            have been working on in the portfolio section.
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(AboutUs, "about", "app__whitebg");
