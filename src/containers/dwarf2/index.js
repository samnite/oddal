import React from "react";
import "./index.scss";
import styled from "styled-components";
import dwarf2 from "../../assets/pic/Pict_2.png";

const StyledText = styled.div`
  grid-column: 1;
  margin-right: 5px;
  p {
    color: var(--primary-color-title);
    font-weight: bold;
    &:first-child {
      margin-top:0;
    }
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    p {
      color: var(--primary-color-title);
      font-weight: bold;
      &:first-child {
        margin-top:36px;
      }
    }
  }
`;

const StyledImage = styled.div`
  @media (max-width: 1024px) {
    display: none;
    grid-template-columns: 1fr;
    height: 250px;
    margin-left:0;
  }
  display: flex;
  grid-column: 2 / span 2;
  justify-content: center;
  align-items: center;
  background-size: cover;
  max-height: 480px;
  margin-left:38px;
  background: url(${dwarf2}) center center no-repeat;
`;

const StyledMobileImg = styled.div`
  display: none;
  @media (max-width: 1023px) {
    display: block;
    width: 100%;
  }
  img { 
  }
`;

const Dwarf2 = props => {
  return (
    <section className={`App-works ${props.className}`}>
      <StyledMobileImg>
        <img src={dwarf2} alt="Dwarf" />
      </StyledMobileImg>
      <StyledText className="by-title-text">
        <p>
        - Use the unique skills of the northern gods that can turn the tide of any battle
        </p>
        <p>
          - Create your invincible deck of squads and skills to crush everything and everyone your drakkar will swim into
        </p>
        <p>
        - Fight in forests and fields, in the steppes and swamps - show everyone that you are the best jarl in the northern lands
        </p>
        <p>
        - Play with friends, share tactics and ideas, make new ones and create a friendly community in the game
        </p>
      </StyledText>
      <StyledImage />
    </section>
  );
};

export default Dwarf2;
