import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./colorBox.js";
import Navbar from "./navBar.js";
import PaletteFooter from "./paletteFooter.js";

export default class SingleColorPalette extends Component {
  state = {
    shades: this.gatherShades(this.props.palette, this.props.colorId),
    format: "hex",
  };

  gatherShades(palette, colorToBeFilter) {
    let shades = [];
    let allColors = palette.colors;
    /* color object { 100: [] , 50: []} loop on each object
     and for each key(100,50,200. etc) find the color */
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToBeFilter)
      );
    }
    //remove shades with 50 weight
    return shades.slice(1);
  }

  changeFormat = (value) => {
    this.setState({ format: value });
  };

  render() {
    const { format } = this.state;
    const {paletteName, emoji, id}= this.props.palette
    const colorBoxes = this.state.shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="single-color-palette palette">
        <Navbar handleFormatChange={this.changeFormat} showSlider={false} />
        <div className="palette-colors">{colorBoxes}
        <div className='go-back-box color-box'>
        <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
        </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
