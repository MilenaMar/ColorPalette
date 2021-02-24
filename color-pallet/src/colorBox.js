import React, { Component } from "react";
import "./colorBox.css";

export default class ColorBox extends Component {
  render() {
      const {name, background} = this.props
    return (
      <div style={{ background }} className="color-box">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className='copy-button'>COPY</button>
        </div>
        <span className='see-more'>MORE</span>
      </div>
    );
  }
}
