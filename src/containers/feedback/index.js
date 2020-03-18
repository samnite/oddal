import React from "react";
import "./index.scss";
import TitleBlock from "../../components/titleBlock";
import dwarf2 from "../../assets/pic/Pict_2.png";

class Feedback extends React.Component {
  render() {
    return (
      <section className={`App-feedback ${this.props.className}`}>
        <img src={dwarf2} alt="" />
        <TitleBlock className="App-title-with-divider">
          <p>Title 1</p>
          <img src={dwarf2} alt="" />
        </TitleBlock>
        <section className="by-slider-contrainer">
          <p>Title 2</p>
        </section>
      </section>
    );
  }
}

export default Feedback;
