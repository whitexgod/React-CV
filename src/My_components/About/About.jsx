import "./About.css";
import dp from "../Images/dp.jpg";
import python from "../Images/python.gif";
import C from "../Images/C.gif";
import java from "../Images/java.gif";
import React from "react";
import Footer from "../Footer/Footer";
import html from "../Images/html.gif";
import css from "../Images/css.gif";
import bootstrap from "../Images/bootstrap.gif";
import javascript from "../Images/javascript.gif";
import react from "../Images/react.gif";
import web_dev from "../Images/web_dev.gif";

export default function Home() {
  return (
    <div className="Home-Page">
      <img className="profile-picture" src={dp} alt="Profile picture" />
      <div className="About">
        <h1 className="About-h1">
          Myself, <span>Tuhin Mukherjee</span> and <span>Welcome to my Portfolio.</span>
        </h1>
        <p>
          The human brain is a crazy place, and there are the things that
          fascinate me most : - Computers, their unique ability to solve complex
          problems using just binary logic and algorithms. - The infinite
          expansion of science & technology opening up new paradigm of knowledge
          & opportunity every single day. A passion driven, energetic, fun and
          reliable friend cum tech enthusiast, that's how my peers define me. On
          the other hand I would like to stick to the generic introduction of
          myself being a adaptable, efficient and diligent individual with a
          spark to excel in the field of innovation and IT utilizing my
          technical expertise and problem-solving skills. Possessing effective
          leadership and team management with comprehensible communication
          skills. I am currently pursuing my B.Tech degree from HETC with CSE as
          my major and also seeking for opportunities to work under some
          organization where i can contribute and also further hone my skills. I
          am always open to new ideas and solutions if it has enough logic in
          it.
        </p>
        <div className="About-image-container">
          <img
            className="About-image"
            src={web_dev}
            alt="web-developement gif"
            rel="noreferrer"
          ></img>
        </div>

        <h3 className="About-h3">
          I Love to work on unique challenging projects, craving to learn new
          technology and always up for problem solving. Technologies :{" "}
        </h3>
        <ul>
          <li className="heading">
            Programming Languages :
            <ul className="program-list">
              <li>
                <a target="_blank" href="https://docs.python.org/3/" rel="noreferrer">
                  Python Programming Language
                </a>
                <img
                  className="skills-image"
                  src={python}
                  alt="pyhton.gif"
                  rel="noreferrer"
                ></img>
              </li>
              <li>
                <a target="_blank" href="https://devdocs.io/c/" rel="noreferrer">
                  C Programming Language
                </a>
                <img className="skills-image" src={C} alt="C.gif" rel="noreferrer"></img>
              </li>
              <li>
                <a target="_blank" href="https://docs.oracle.com/en/java/" rel="noreferrer">
                  Java Programming Language
                </a>
                <img className="skills-image" src={java} alt="java.gif" rel="noreferrer"></img>
              </li>
            </ul>
          </li>
          <li className="heading">
            Web developement tools :
            <ul className="program-list">
              <li>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noreferrer"
                >
                  HTML
                </a>
                <img className="skills-image" src={html} alt="html.gif" rel="noreferrer"></img>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noreferrer"
                >
                  CSS
                </a>
                <img className="skills-image" src={css} alt="css.gif" rel="noreferrer"></img>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer"
                >
                  JavaScript
                </a>
                <img
                  className="skills-image"
                  src={javascript}
                  alt="javascript.gif"
                  rel="noreferrer"
                ></img>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" rel="noreferrer"
                >
                  BootStrap
                </a>
                <img
                  className="skills-image"
                  src={bootstrap}
                  alt="bootstrap.gif"
                  rel="noreferrer"
                ></img>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://reactjs.org/docs/getting-started.html" rel="noreferrer"
                >
                  React js
                </a>
                <img className="skills-image" src={react} alt="react.gif" rel="noreferrer"></img>
              </li>
            </ul>
          </li>
          <li className="heading">Machine Learning. </li>
          <li className="heading">Automation with Python. </li>
          <li className="heading">
                My hobbies include :
              <ul className="program-list">
                <li>Solving Coding Problems.
                <img className="skills-image" src="https://c.tenor.com/2uyENRmiUt0AAAAC/coding.gif" alt="react.gif" rel="noreferrer"></img>
                </li>
                <li>Playing Chess.
                <img className="skills-image" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpuTejFE.gif" alt="react.gif" rel="noreferrer"></img>
                </li>
                <li>
                Gaining knowledge about evolving technologies.
                <img className="skills-image" src="https://c.tenor.com/z20mswLxHyEAAAAC/technology.gif" alt="react.gif" rel="noreferrer"></img>
                </li>
              </ul>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
