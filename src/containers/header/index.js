import React from "react";
import styled from "styled-components";
import "./index.scss"
import img from "../../assets/pic/header/Shapka_1.png";
import gplay from "../../assets/pic/header/gplay.png";
import itunes from "../../assets/pic/header/itunes.png";


const Header = () => {

  return (
    <div className="header">
      <a className="button-play" href="/">ИГРАТЬ</a>
      <div class="store-buttons">
        <a href="#"><img src={gplay} alt="Download from Google Play" /></a>
        <a href="#"><img src={itunes} alt="Download from ITunes" /></a>
      </div>
    </div>
  );
};

export default Header;
