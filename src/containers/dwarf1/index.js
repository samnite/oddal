import React from "react";
import "./index.scss";
import dwarf1 from "../../assets/pic/Pict_1.png";

class Dwarf1 extends React.Component {
  render() {

    return (
      <section className={`App-dwarf1 ${this.props.className}`}>
        <div className="App-dwarf1-art">
          <img src={dwarf1} alt="Screenshot" />
        </div>
        <div className="App-dwarf1-info">
          <div className="by-title-text">
            <p>
            - Fight in real time battles with AI or with opponents from all around the world
            </p>
            <p>- For silver, gold and glory</p>
            <p>
            - Get rewards from chests, upgrade your squads and skills, or find new ones
            </p>
            <p>
            - Gather an army of epic chieftains of the great viking clans and crush everyone on your way
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Dwarf1;
