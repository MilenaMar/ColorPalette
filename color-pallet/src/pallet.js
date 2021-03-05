import React, {Component} from 'react'
import ColorBox from './colorBox.js'
import './pallet.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

class Pallete extends Component {
  state = {
    level:400,
  }

  changeLevel = (level) => {
  this.setState({level})
  }

  render () {
    const {colors} = this.props.pallete
    const {level} = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} key={color.color}/>
     ) )
      return (
          <div className='palette'>
          <Slider defaultValue= {this.state.level} 
          min={100}  max={900} 
          step={100} 
          onAfterChange={this.changeLevel}/>
          {/* Navbar will go here */}
          <div className='palette-colors'>{colorBoxes}</div>
          {/* Footer Will go here */}
          </div>
      )
  }
}

export default Pallete;