import React from "react";
import "./index.scss";
import Carousel, { Modal, ModalGateway } from 'react-images';
import TitleBlock from "../../components/titleBlock";
import Slider from "../../components/slider";
import InfoBlock from "../../components/infoBlock";
import Pagination from "../../components/pagination";

class Media extends React.Component {
  formatTitle = title => {
    if (this.props.colorize) {
      return title.replace(/\s[\W]*$/, x => `<span>${x}</span>`);
    } else {
      return title;
    }
  };
  state = {
    pagesCount: 1,
    current: 1,
    modalIsOpen: false,
    selectedIndex: 0,
  };
  toggleModal = (selectedIndex) => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
      selectedIndex: selectedIndex,
    }));
  };
  pagesCountUpdated = pagesCount => {
    this.setState({ pagesCount: pagesCount });
  };
  currentPageUpdated = current => {
    this.setState({ current: current + 1 });
  };
  render() {
    const { modalIsOpen } = this.state;
    let data = this.props.data;
    let images = data.list.filter((item)=> item.image).map(item => item.image)
    images.forEach((item, index) => {
      item.index = index 
    });
    return (
      <section className={`App-media ${this.props.className}`}>
        <TitleBlock className="App-title-with-divider" text={data.title} >
          <Pagination
            count={this.state.pagesCount}
            active={this.state.current}
            hideNumber={true}
          />
        </TitleBlock>
        <section className="by-slider-contrainer">
          <Slider
            elementsCount={data.list.length}
            pagesCountUpdated={this.pagesCountUpdated}
            currentPageUpdated={this.currentPageUpdated}
          >
            {data.list.map((item, index) => (
              <InfoBlock image={item.image} video={item.video} key={index} onClick={() => this.toggleModal(item.index)}/>
            ))}
          </Slider>
          <Pagination
            className="mobile-pagination"
            count={this.state.pagesCount}
            active={this.state.current}
            hideNumber={true}
          />
        </section>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel
                currentIndex={this.state.selectedIndex}
                views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </section>
    );
  }
}

export default Media;
