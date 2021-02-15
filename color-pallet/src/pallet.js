import React, {Component} from 'react'
import ColorBox from './colorBox.js'

class Pallete extends Component {
  render () {

    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} key={color.color}/>
     ) )
      return (
          <div className='palette'>
          {/* Navbar will go here */}
          <div className='palette-colors'>
          <h1>{colorBoxes}</h1>
          {colorBoxes}
          </div>
          {/* Footer Will go here */}
          </div>
      )
  }
}

export default Pallete;