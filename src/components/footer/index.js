import React from "react";
import "./index.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className={`by-footer ${this.props.className}`}>
        <div className={"by-footer-content"}>
          &copy; {new Date().getFullYear()} «Одда»
        </div>
      </div>
    );
  }
}

export default Footer;
