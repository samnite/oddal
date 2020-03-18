import React from "react";
import styled from "styled-components";
import footerImg from "../../assets/pic/Niz.png";

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: bold;
  font-family: var(--primary-font);
  color: #fff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background: limegreen;
  bottom: -30px;
`;

const StyledBuilding = styled.div`
  display: flex;
  //background: url(${footerImg}) center center no-repeat;
  flex-direction: column;
  align-items: center;
  height: 600px;
  justify-content: center;
  font-family: var(--footer-font);
  width: 1380px;
  div {
  position: absolute;
  }
    @media (max-width: 768px) {
    width: 100%;
    height: 400px;
     img {
     display: none;
    }
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-color-title);
  margin-top: 50px;
  h1 {
    font-size: 60px;
    color: #fff;
    margin-top: 20px;
  }
  h3 {
    font-size: 38px;
    color: #fff;
    margin-left: 25px;
    margin-bottom: 5px;
  }
`

const Hero = props => {
  return (
    <StyledBuilding className={props.className}>
      <img src={footerImg} alt="dd"/>
      <StyledText>
        <h3>ТЫ ВИКИНГ!</h3>
        <h1>ТЫ ГЕРОЙ!</h1>
        <StyledButton>ИГРАТЬ</StyledButton>
      </StyledText>
    </StyledBuilding>

  );
};

export default Hero;
