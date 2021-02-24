import React, {Component} from 'react'
import ColorBox from './colorBox.js'
import './pallet.css'

class Pallete extends Component {
  render () {

    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} key={color.color}/>
     ) )
      return (
          <div className='palette'>
          {/* Navbar will go here */}
          <div className='palette-colors'>{colorBoxes}</div>
          {/* Footer Will go here */}
          </div>
      )
  }
}

export default Pallete;