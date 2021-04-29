import React, {Component} from 'react'
import ColorBox from './colorBox.js'
import PaletteFooter from './paletteFooter.js'
import NavBar from './navBar'
import './palette.css'


class Pallete extends Component {
  state = {
    level:400,
    format:'hex'
  }

  changeLevel = (level) => {
  this.setState({level})
  }

  changeFormat = (value) => {
    this.setState({format:value})
  }

  render () {
    const {colors, paletteName, emoji,id} = this.props.palette
    const {level, format} = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.hex} colorId={color.id} paletteId={id} showLink={true}/>
     ) )
      return (
          <div className='palette'>
          <NavBar level={level} changeLevel={this.changeLevel}
           handleFormatChange={this.changeFormat} showSlider={true}/>
          <div className='palette-colors'>{colorBoxes}</div>
          <PaletteFooter paletteName={paletteName} emoji={emoji}/>
          </div>
      )
  }
}

export default Pallete;