import React from "react";
import styled from "styled-components";
import buildImg from "../../assets/pic/Building.png";

const StyledBuilding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    margin-right: -200px;
  }
  div {
    position: absolute;
  }
  @media (max-width: 768px) {
    div {
      position: relative;
    }
    img {
      margin-right: 0;
    }
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-color-title);
  width: 480px;
  left: 12%;
  top: 7%;
  h1 {
    font-size: 22px;
    color: #fff;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
    font-size: 18px;
    justify-content: center;
    align-items: center;
    width: 100%;
    left: 0;
    top: 0;
  }
`;

const Building = props => {
  return (
    <StyledBuilding className={props.className}>
      <img src={buildImg} alt="Building" />
      <StyledText>
        <h1>WELCOME TO THE VIKINGS WORLD!</h1>
        <p>
          Gather and upgrade an army of furious vikings, combine dozens of
          squads and skills. Create your own unique tactics that will lead you
          to victory! Fight against AI in exciting story campaign, or battle
          with other players in the PvP arena. How, with whom and where to play
          - all this is up to you to choose!
        </p>
      </StyledText>
    </StyledBuilding>
  );
};

export default Building;
