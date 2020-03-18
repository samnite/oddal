import React from "react";
import "./index.scss";
import styled from "styled-components";
import dwarf2 from "../../assets/pic/Pict_2.png";

const StyledText = styled.div`
  grid-column: 1;
  margin-right: 5px;
  p {
    color: var(--primary-color-title);
    font-size: 23px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledImage = styled.div`
  display: flex;
  grid-column: 2 / span 2;
  justify-content: center;
  align-items: center;
  background-size: cover;
  max-height: 450px;
  background: url(${dwarf2}) center center no-repeat;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 250px;
  }
`;

const StyledMobileImg = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;

const Dwarf2 = props => {
  return (
    <section className={`App-works ${props.className}`}>
      <StyledMobileImg>
        <img src={dwarf2} alt="Dwarf" />
      </StyledMobileImg>
      <StyledText>
        <p>
          - FIGHT IN REAL TIME BATTLES WITH AI OR WITH OPPONENTS FROM ALL AROUND
          THE WORLD
        </p>
        <p>- FOR SILVER, GOLD AND GLORY</p>
        <p>
          - GET REWARDS FROM CHESTS, UPGRADE YOUR SQUADS AND SKILLS, OR FIND NEW
          ONES
        </p>
        <p>
          - GATHER AN ARMY OF EPIC CHIEFTAINS OF THE GREAT VIKING CLANS AND
          CRUSH EVERYONE ON YOUR WAY
        </p>
      </StyledText>
      <StyledImage />
    </section>
  );
};

export default Dwarf2;
