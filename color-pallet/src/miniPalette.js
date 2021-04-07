import React from "react";
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";

// <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  color: {
    backgroundColor: "grey",
    height:'140px',
    width:'100%',
    overflow:'hidden'
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alingItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
      height:'25%',
      width:'20%',
      display:'inline-block',
      margin:'0 auto',
      position:'relative',
      marginBottom:'-3.5px'
  }
};
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      key={color.color}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.color}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
