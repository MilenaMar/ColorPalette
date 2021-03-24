import React, {Component} from 'react'
import ColorBox from './colorBox.js'
import NavBar from './navBar'
import './pallet.css'



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
    const {colors} = this.props.pallete
    const {level, format} = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.hex}/>
     ) )
      return (
          <div className='palette'>
          <NavBar level={level} changeLevel={this.changeLevel} handleFormatChange={this.changeFormat}/>
          <div className='palette-colors'>{colorBoxes}</div>
          {/* Footer Will go here */}
          </div>
      )
  }
}

export default Pallete;