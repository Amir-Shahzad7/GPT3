import React, { useEffect } from "react";
import possibilityImage from "../../Assets/possibility.png";
import "./Possibility.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Possibility = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div
        className="gpt3__possibility-image"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div
        className="gpt3__possibility-content"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
