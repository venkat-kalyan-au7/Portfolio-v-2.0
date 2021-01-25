import React from "react";
import styled from "styled-components";
import Email from "../../images/Email.png";
import GitHub from "../../images/GitHub.png";
import LinkedIn from "../../images/LinkedIn.png";
import ResumeLogo from "../../images/resume.png";
import resume from "../../images/PatrickJohnson_Resume.pdf";

const Contact = () => {
  const ReachOut = styled.h1`
    font-size: 50px;
    font-family: "Economica", sans-serif;
    color: #1d1e22;
  `;

  const ContactInfo = styled.div`
    width: 60%;
    height: auto;
    text-align: center;
    margin: 20px auto;
    font-family: "Poppins", sans-serif;
  `;

  const ContactLink = styled.a`
    text-decoration: none;
    color: black;
    margin: 0 30px;

    &:visited {
      text-decoration: none;
      color: #1d1e22;
    }
    &:hover {
      text-decoration: none;
      color: #1d1e22;
    }
    &:focus {
      text-decoration: none;
      color: #1d1e22;
    }
    &:hover,
    &:active {
      text-decoration: none;
      color: #1d1e22;
    }
  `;

  const Logo = styled.img`
    filter: grayscale(100%);
    width: 100px;
    height: auto;
  `;

  return (
    <ContactInfo>
      <ReachOut>Network & More</ReachOut>
      <ContactLink
        href="https://www.linkedin.com/in/patrickdeanjohnson/"
        target="_blank"
      >
        <Logo src={LinkedIn} />
      </ContactLink>
      <ContactLink href="https://github.com/patrickj188" target="_blank">
        <Logo src={GitHub} />
      </ContactLink>
      <ContactLink href="mailto:patrickj188Dev@gmail.com" target="_blank">
        <Logo src={Email} />
      </ContactLink>
      <ContactLink href={resume} target="_blank">
        <Logo src={ResumeLogo} />
      </ContactLink>
    </ContactInfo>
  );
};

export default Contact;
