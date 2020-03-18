import React from "react";
import styled from "styled-components";
import footerImg from "../../assets/pic/Niz.png";
import "./index.scss"

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


const StyledText = styled.div`
`

const Hero = props => {
  return (
    <div className={`footer ${props.className}`}>
      <img src={footerImg} alt="dd"/>
      <div className="desc">
        <h3>ТЫ ВИКИНГ!</h3>
        <h1>ТЫ ГЕРОЙ!</h1>
        <div ><a className="button-play" href="#">ИГРАТЬ</a></div>
      </div>
    </div>

  );
};

export default Hero;
