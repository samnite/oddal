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
          <div className="by-title-text" style={{ fontSize: "23px" }}>
            <p>
              - FIGHT IN REAL TIME BATTLES WITH AI OR WITH OPPONENTS FROM ALL
              AROUND THE WORLD
            </p>
            <p>- FOR SILVER, GOLD AND GLORY</p>
            <p>
              - GET REWARDS FROM CHESTS, UPGRADE YOUR SQUADS AND SKILLS, OR FIND
              NEW ONES
            </p>
            <p>
              - GATHER AN ARMY OF EPIC CHIEFTAINS OF THE GREAT VIKING CLANS AND
              CRUSH EVERYONE ON YOUR WAY
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Dwarf1;
