import React from "react";
import styled from "styled-components";
// import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #1d1e22;
  text-align: center;
  margin: 20 auto 40px auto;
`;

const ButtonDiv = styled.div`
  position: absolute;
  top: 8vh;
  width: 100%;
  margin: 0 auto;
  font-size: 30px;
  padding-top: 3px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: transparent;
  border: none;
  text-align: center;
  width: 15%;
  margin: 5px auto;
  color: #feda6a;
  font-family: "Economica", sans-serif;
  outline: none;
  @media (max-width: 500px) {
    width: 20%;
    margin: 5px auto;
    font-size: 15px;
    padding: 5px 5px;
  }
`;

const NameDiv = styled.div`
  position: absolute;
  top: 0vh;
  width: 100%;
  margin: 5px auto;
  font-size: 50px;
  font-family: "Economica", sans-serif;
  color: #feda6a;
  padding-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 35px;
  }
`;

const divStyle = {
  margin: "10px"
};

const NavBar = props => {
  return (
    <Wrapper>
      <NameDiv>Venkat Kalyan</NameDiv>
      <ButtonDiv>
        <Button onClick={props.about}>About</Button>
        <Button onClick={props.project}>Projects</Button>
        <Button onClick={props.skills}>Experience</Button>
      </ButtonDiv>
    </Wrapper>
  );
};

export default NavBar;
