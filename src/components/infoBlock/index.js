import React, { Component } from "react";
import "./index.scss";
import Button from "../button";

class InfoBlock extends Component {
  state = {
    isPlaying: false
  };
  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
    this.setState({ isPlaying: true });
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
    this.setState({ isPlaying: false });
  };

  onVideoCLick = () => {
    if (this.state.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  };
  render() {
    return (
      <div
        className={`by-info-block ${
          this.props.className ? this.props.className : ""
        }`}
      >
        {this.props.image ? (
          <img src={this.props.image.src} alt={this.props.image.alt} onClick={this.props.onClick.bind(this)} />
        ) : null}
        {this.props.video ? (
          <video
            src={this.props.video.src}
            width="320"
            height="240"
            ref="vidRef"
            onClick={this.onVideoCLick}
          >
            <source src={`${this.props.video.src}`} type="video/mp4" />
          </video>
        ) : null}
        {this.props.title ? (
          <h1
            className="by-title-text"
            dangerouslySetInnerHTML={{ __html: this.props.title }}
          />
        ) : null}
        {this.props.subtitle ? (
          <div
            className="by-subtitle-text"
            dangerouslySetInnerHTML={{ __html: this.props.subtitle }}
          />
        ) : null}
        {this.props.more ? (
          <div
            className="by-more-text"
            dangerouslySetInnerHTML={{ __html: this.props.more }}
          />
        ) : null}
        {this.props.desc ? (
          <div
            className="by-description-text"
            dangerouslySetInnerHTML={{ __html: this.props.desc }}
          />
        ) : null}
        {this.props.button ? (
          <Button text={this.props.button} onClick={this.props.handler} />
        ) : null}
      </div>
    );
  }
}

export default InfoBlock;
