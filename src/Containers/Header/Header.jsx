import React, { useEffect } from "react";
import "./Header.css";
import people from "../../Assets/people.png";
import ai from "../../Assets/ai.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="gpt3__header section__padding" id="home">
      <div
        className="gpt3__header-content"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="Header" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div
        className="gpt3__header-image"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
