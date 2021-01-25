import React from "react";
import styled from "styled-components";
import "./style.css";
import skilsItems from "../../skillsImg.json";

const Languages = props => {
  const LanguagesDiv = styled.div`
    width: 50%;
    justify-content: center;
    text-align: center;
    display: block;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 30% 30% 30% 30%;
    padding: 10px;
    margin: 0 auto;
    @media (max-width: 1400px) {
      grid-template-columns: 40% 40% 40% 40%;
    }
    @media (max-width: 1000px) {
      grid-template-columns: 50% 50% 50%;
    }
    @media (max-width: 750px) {
      grid-template-columns: 60% 60%;
    }
    @media (max-width: 550px) {
      grid-template-columns: 80%;
    }
  `;

  const Boxes = styled.div`
    padding: 30px;
    font-size: 30px;
    text-align: center;
  `;

  const BoxImg = styled.img`
    width: 100%;
    height: auto;
  `;

  const Title = styled.h3`
    font-size: 38px;
    font-family: "Economica", sans-serif;
    color: #393f4d;
  `;

  const renderedGrid = skilsItems.map(item => {
    return (
      <Boxes>
        <BoxImg src={item.img} />
      </Boxes>
    );
  });

  return (
    <div>
      <Title>Languages I Speak</Title>
      <LanguagesDiv>{renderedGrid}</LanguagesDiv>
    </div>
  );
};

export default Languages;
