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
          <img src={images.profile2} alt="Franci's Photo" />

          <div className="">
            <p className="p-s-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              ipsam doloribus earum? Fugiat molestias, impedit rem nulla
              consectetur consequuntur explicabo asperiores distinctio, tempora
              officia iusto sit autem accusamus obcaecati aspernatur.
            </p>
            <br></br>

            <p className="p-s-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              ipsam doloribus earum? Fugiat molestias, impedit rem nulla
              consectetur consequuntur explicabo asperiores distinctio, tempora
              officia iusto sit autem accusamus obcaecati aspernatur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(AboutUs, "about", "app__whitebg");
