import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './navBar.css'

class Navbar extends Component {
  state = {
     format:'hex',
     open:false,
  }

  handleFormatChange= (e)=>{
    this.setState({format:e.target.value, open:true})
    this.props.handleFormatChange(e.target.value)
  }

  handleClose= (e)=> {
    this.setState({open:false})
  }

  render() {
    const { level, changeLevel} = this.props;
    const {format} = this.state;
    return (
      <nav className="nav-bar">
        <div className="logo">
        <Link to='/'>ReactColorPick</Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleFormatChange}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 0.8)</MenuItem>
          </Select>
        </div>
        <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'left'}}
        open={this.state.open} 
        onClose={this.handleClose}  
        autoHideDuration={3000} 
        message={<span id='message-id'>Format Changed to {format.toLocaleUpperCase()}!</span>}
        ContentProps={{'aria-describedby':'message-id'}}
        action={<IconButton arial-label='close' size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
          <CloseIcon fontSize="small"/>
        </IconButton>}
        />
        
      </nav>
    );
  }
}
export default Navbar;
