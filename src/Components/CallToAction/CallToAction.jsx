import React, { useEffect } from "react";
import "./CallToAction.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CallToAction = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="gpt3__cta section__margin"
      data-aos="zoom-in-right"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-button">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CallToAction;
