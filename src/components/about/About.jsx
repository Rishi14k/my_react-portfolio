import React from "react";
import "./about.css";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/about_me.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="img" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="profile" width={"450px"}/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m currently in my 4th semester of BSc in CS & IT, with a strong
              interest in web development. I’ve already built solid skills in
              frontend technologies like HTML, CSS, JavaScript, and React, and
              I’m expanding into backend development with Node.js, Express, and
              MongoDB.
            </p>
            <p>
              I aim to become a skilled MERN Stack Developer. I enjoy creating
              clean, user-friendly web applications and solving real-world
              problems through code. After gaining experience through
              internships, I plan to land a high-paying job and eventually
              launch my own startup.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>
                HTML <hr style={{ width: "90%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                CSS <hr style={{ width: "75%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                ReactJS <hr style={{ width: "70%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                NodeJS <hr style={{ width: "73%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                ExpressJS <hr style={{ width: "70%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                MongoDB <hr style={{ width: "65%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                Python <hr style={{ width: "70%" }} />
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="achivements">
          <h1>7+</h1>
          <p>Skills</p>
        </div>
        <hr />
        <div className="achivements">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achivements">
          <h1>3+</h1>
          <p>CERTIFICATIONS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
