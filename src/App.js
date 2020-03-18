import React from "react";
import "./App.scss";
import "./assets/iconfont/css/fontello.css";
import data from "./AppData";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";
import Dwarf1 from "./containers/dwarf1";
import Media from "./containers/media";

import utils from "./utils";
import Header from "./containers/header";
import Dwarf2 from "./containers/dwarf2";
import Building from "./containers/building";
import Hero from "./containers/footer";

class App extends React.Component {
  showUpElements = [];
  componentDidMount() {
    window.addEventListener("scroll", this.scrollEventHandler, true);

    this.showUpElements = [
      document.querySelector(".App-main-media"),
      document.querySelector(".App-main-building"),
      document.querySelector(".App-main-dwarf1"),
      document.querySelector(".App-main-dwarf2"),
      document.querySelector(".App-main-hero")
    ];

    this.showUpElements.forEach(elem => {
      if (elem) {
        Array.from(elem.children).forEach(el => {
          el.style.opacity = 0;
        });
      }
    });
    this.scrollEventHandler();
    utils
      .css_browser_selector(navigator.userAgent)
      .split(" ")
      .forEach(item => {
        document.body.classList.add(item);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEventHandler, true);
  }

  isScrolledIntoView(el) {
    let elemTop = el.getBoundingClientRect().top;
    let isVisible = elemTop <= (window.innerHeight / 3) * 2; //&& (elemBottom <= window.innerHeight);
    return isVisible;
  }

  scrollEventHandler = e => {
    this.showUpElements.forEach(elem => {
      if (elem && this.isScrolledIntoView(elem)) {
        Array.from(elem.children).forEach(el => {
          if (el.style.getPropertyValue("animation") === "") {
            el.style.setProperty(
              "animation",
              ".75s ease-in-out forwards show-up-block"
            );
          }
        });
      }
    });
  };
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Header />
        </Wrapper>
        <main className="App-main">
          <Wrapper id="App-main-media">
            <Media
              className="App-main-media App-main-layout"
              data={data.main.media}
            />
          </Wrapper>
          <Wrapper id="App-main-building">
            <Building className="App-main-building" />
          </Wrapper>
          <Wrapper id="App-main-dwarf1">
            <Dwarf1 className="App-main-dwarf1 App-main-layout App-main-layout-left-extend" />
          </Wrapper>
          <Wrapper id="App-main-dwarf2">
            <Dwarf2 className="App-main-dwarf2 App-main-layout App-main-test" />
          </Wrapper>
          <Wrapper id="App-main-hero">
            <Hero className="App-main-hero" />
          </Wrapper>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
