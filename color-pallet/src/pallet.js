import React, {Component} from 'react'
import ColorBox from './colorBox.js'
import NavBar from './navBar'
import './pallet.css'



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
      <ColorBox background={color.hex} name={color.name} key={color.hex}/>
     ) )
      return (
          <div className='palette'>
          <NavBar level={level} changeLevel={this.changeLevel}/>
          <div className='palette-colors'>{colorBoxes}</div>
          {/* Footer Will go here */}
          </div>
      )
  }
}

export default Pallete;