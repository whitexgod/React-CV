import "./Projects.css";
import React, { useState, useEffect } from "react";
import projects_list from "./project_list";
import Footer from "../Footer/Footer";
import favorite_list from "./Favorite_list";

export default function Projects() {
  const default_style = {
    background: "#BE93C5",
    background: "-webkit-linear-gradient(to right, #7BC6CC, #BE93C5)",
    background: "linear-gradient(to right, #7BC6CC, #BE93C5)",
  };
  const dark_mode_style = {
    backgroundColor: "#24252A",
    color: "white",
  };
  const [styleBody, setStyleBody] = useState(default_style);

  function createCard(props) {
    return (
    <div className="Project-card-box">
      <div className="Project-card">
        <img className="card-img-top" src={props.image} alt="image"></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div class="card-body">
          <a href={props.url1} target="_blank" className="card-link">
            Github link
          </a>
          { props.url2!=""? <a href={props.url2} target="_blank" className="card-link">Heroku app Link</a>: "" }
        </div>
      </div>
      </div>
    );
  }
  function createFavCard(props) {
    return (
    <div className="Project-card-box">
      <div className="Project-card">
      <i className="fas fa-star" style={{color:"yellow"}}></i>
        <img className="card-img-top" src={props.image} alt="image"></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div class="card-body">
          <a href={props.url1} target="_blank" className="card-link">
            Github link
          </a>
          { props.url2!=""? <a href={props.url2} target="_blank" className="card-link">Heroku app Link</a>: "" }
        </div>
      </div>
      </div>
    );
  }

  return (
    <div style={styleBody} classNameName="Project-Page">
      <div className="dark-mode">
        <button
          onClick={() => {
            setStyleBody(dark_mode_style);
          }}
          type="button"
          className="btn btn-info"
        >
          Enable Dark mode
        </button>
        <button
          onClick={() => {
            setStyleBody(default_style);
          }}
          type="button"
          className="btn btn-info"
        >
          Enable Normal mode
        </button>
      </div>
      <div className="Project-h2-body">
        <h2 className="Project-h2">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>JECT'S</span>
        </h2>
      </div>
      <div className="Project-body">
      <div className="Project-banner">
          {favorite_list.map(createFavCard)}
      </div>
      {projects_list.map(createCard)}
      </div>
    <Footer/>
    </div>
  );
}
