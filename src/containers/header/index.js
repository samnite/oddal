import React from "react";
import styled from "styled-components";
import img from "../../assets/pic/header/Shapka_1.png";
import gplay from "../../assets/pic/header/gplay.png";
import itunes from "../../assets/pic/header/itunes.png";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  width: 1380px;
  margin-left: -20px;
  img {
    width: 100%;
  }
  div {
    position: absolute;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background: limegreen;
  bottom: 20%;
  @media (max-width: 768px) {
    width: 120px;
    height: 40px;
    font-size: 16px;
    position: relative;
    left: 10%;
    bottom: 3%;
  }
`;

const StyledApps = styled.div`
  display: flex;
  bottom: 2%;
  img {
    width: 150px;
    margin: 5px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    img {
      width: 100px;
      margin: 2px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={img} alt="Background" />
      <StyledButton>ИГРАТЬ</StyledButton>
      <StyledApps>
        <img src={gplay} alt="Download from Google Play" />
        <img src={itunes} alt="Download from ITunes" />
      </StyledApps>
    </StyledHeader>
  );
};

export default Header;
