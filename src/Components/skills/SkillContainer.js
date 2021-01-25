import React from "react";
import Languages from "./Languages";
import styled from "styled-components";
import "./style.css";

const SkillContainer = () => {
  const SkillsDiv = styled.div`
    height: 100%;
    margin: 25px 0;
    justify-content: center;
    text-align: center;
    -webkit-animation: fadein 2s;
    -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
    -o-animation: fadein 2s;
    animation: fadein 2s;
  `;

  return (
    <SkillsDiv>
      <Languages />
    </SkillsDiv>
  );
};

export default SkillContainer;
