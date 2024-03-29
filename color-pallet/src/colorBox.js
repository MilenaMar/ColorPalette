import React, { Component } from "react";
import "./colorBox.css";
import {Link} from 'react-router-dom'
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class ColorBox extends Component {
  state = {
    copied: false,
  };

  changeCopyState = () => {
   this.setState({  copied: true} ,  () => {
    setTimeout(() => this.setState({ copied: false }), 1500);
   });
  }

  render() {
    const { name, background,colorId,paletteId, showLink } = this.props;
    const {copied} = this.state
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="color-box">
          <div className={`copy-overlay ${copied ? 'show' : ''}`} style={{ background }} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>COPIED!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">COPY</button>
          </div>
          {showLink &&
          <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
          <span className="see-more">MORE</span>
          </Link>
          }
        </div>
      </CopyToClipboard>
    );
  }
}

