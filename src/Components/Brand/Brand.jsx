import React, { useEffect } from "react";
import "./Brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";
import AOS from "aos";
import "aos/dist/aos.css";

const Brand = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="gpt3__brand section__padding">
      <div data-aos="fade-down" data-aos-delay="50" data-aos-duration="1500">
        <img src={google} alt="google" />
      </div>
      <div data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500">
        <img src={slack} alt="slack" />
      </div>
      <div data-aos="fade-down" data-aos-delay="150" data-aos-duration="1500">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1500">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div data-aos="fade-down" data-aos-delay="250" data-aos-duration="1500">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
