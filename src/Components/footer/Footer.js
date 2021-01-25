import React from 'react';
import styled from 'styled-components';
import resume from '../../images/PatrickJohnson_Resume.pdf'

const Footer = () => {

    const Footer = styled.div` 
    width: 100%;
    height: 10vh;
    background-color: #1d1e22;
    text-align: center;
    margin-top: 60px;
    position: relative;
    bottom: 0;
`;

const Links = styled.div`
display: flex;
justify-content: center;
font-family: 'Economica', sans-serif;
color: #feda6a;
text-decoration: none;
`;

const LinkButtons = styled.button`
  font-size: 1em;
  padding: 10px 10px;
  background-color: transparent;
  border: none;
  text-align: center;
  width: 5%;
  margin: 1em 2em;
  color: #feda6a;
  font-family: 'Economica', sans-serif;
  text-decoration: none;
`;

const Link = styled.a`
text-decoration: none;
&:visited { text-decoration: none; color:#feda6a; }
&:hover { text-decoration: none; color:#feda6a; }
&:focus { text-decoration: none; color:#feda6a; }
&:hover, &:active { text-decoration: none; color:#feda6a }
`

    return (
        <Footer>
            <Links>
            <LinkButtons>
                <Link href="https://github.com/patrickj188" target="_blank">GitHub</Link>
                </LinkButtons>
            <LinkButtons>
                <Link href="https://www.linkedin.com/in/patrickdeanjohnson/" target="_blank">LinkedIn</Link>
            </LinkButtons>
            <LinkButtons>
                <Link href={resume} target="_blank">Resume</Link>
            </LinkButtons>
            
            </Links>
        </Footer>
    )
};

export default Footer;