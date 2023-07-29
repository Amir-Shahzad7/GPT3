import React, { useEffect } from "react";
import { Artical } from "../../Components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./Blog.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div
          className="gpt3__blog-container_groupA"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <Artical
            imgURL={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div
          className="gpt3__blog-container_groupB"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <Artical
            imgURL={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Artical
            imgURL={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Artical
            imgURL={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Artical
            imgURL={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
