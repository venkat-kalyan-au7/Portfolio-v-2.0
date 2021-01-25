import React from "react";
import "./projectStyle.css";

const ProjectLarge = props => {
  return (
    <div className="container">
      <img src={props.img} alt="Avatar" className="image" />
      <div className="middle">
        <div className="text">{props.name}</div>
        <div className="about-text"> {props.about}</div>
        <div className="text">
          <a href={props.gitHub} target="_blank">
            <button className="button">GitHub</button>
          </a>
          <a href={props.website} target="_blank">
            <button className="button">Website</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectLarge;
