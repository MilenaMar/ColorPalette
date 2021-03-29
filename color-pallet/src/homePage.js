import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './miniPalette'


class HomePage extends Component {
    render() {
     const {palettes}= this.props
        return (
        <div>
        <MiniPalette></MiniPalette>
            <h1>REACT PALETTES</h1>
            {palettes.map((palette)=>(
                <p>
               <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                </p> )) }
        </div>
        )
    }
}

export default HomePage;