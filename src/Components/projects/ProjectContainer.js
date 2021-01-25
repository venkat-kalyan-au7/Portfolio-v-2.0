import React from "react";
import projectItems from "../../projectList.json";
import ProjectList from "./ProjectList";
import styled from "styled-components";
import ProjectLarge from "./ProjectLarge";
import "./projectStyle.css";
import { CSSTransition } from "react-transition-group";

const ProjectContainer = () => {
  const ContainerProject = styled.div`
    display: block;
    justify-content: center;
    margin: 0auto;
    -webkit-animation: fadein 2s;
    -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
    -o-animation: fadein 2s;
    animation: fadein 2s;
  `;
  const ImgDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &:hover {
      opacity: 100;
    }
    @media (max-width: 950) {
      flex-direction: column;
    }
  `;

  let projectLarge = projectItems.map(item => {
    return (
      <ProjectLarge
        className="imgDiv"
        className={item.id % 2 ? "odd" : "even"}
        key={item.id}
        name={item.project}
        about={item.about}
        website={item.website}
        gitHub={item.githubLink}
        img={item.img}
      />
    );
  });

  return (
    <div className="fadein">
      <ContainerProject>
        <ImgDiv>{projectLarge}</ImgDiv>
      </ContainerProject>
    </div>
  );
};

export default ProjectContainer;
