import React, {Component} from 'react'
import ColorBox from './colorBox.js'


export default class SingleColorPalette extends Component{
    state = {
     shades: this.gatherShades(this.props.palette, this.props.colorId)
    }

    gatherShades(palette, colorToBeFilter) {
     let shades = []
     let allColors = palette.colors
     /* color object { 100: [] , 50: []} loop on each object
     and for each key(100,50,200. etc) find the color */
     for (let key in allColors){
      shades = shades.concat(allColors[key].filter(color => color.id === colorToBeFilter))
     }
     //remove shades with 50 weight 
     return shades.slice(1)
    }
    render () {
        const colorBoxes = this.state.shades.map( color => <ColorBox key={color.name} name={color.name} background={color.hex} showLink={false}/>)
        return (
            <div className='palette'>
            <div className='palette-colors'>{colorBoxes}</div>    
            </div>
     
        )
    }
}