import React, {Component} from "react";
import Palette from "./palette";
import HomePage from './homePage'
import SingleColorPalette from './singleColorPalette'
import { Route, Switch } from "react-router-dom";
import seedsColors from "./SeedsColors";
import { generatePalette } from "./colorHelpers";


class App extends Component {

 findPalette (id){
   return seedsColors.find(function (palette){
     return palette.id === id
   })
 }
 render () {
  return (
    <Switch>
      <Route exact path="/" render={(routeProps)=> <HomePage palettes={seedsColors} {...routeProps}/>} />
      <Route exact path="/palette/:id" 
      render={ routerProps=> (<Palette 
      palette={generatePalette(this.findPalette(routerProps.match.params.id))} />)} />
      <Route exact path="/palette/:paletteId/:colorId" render={ routerProps=> (<SingleColorPalette 
     colorId={routerProps.match.params.colorId}
     palette={generatePalette(this.findPalette(routerProps.match.params.paletteId))} />)} />
    </Switch>

    //<div className="App">
    //<Palette />
    //</div>
  );
 }
}

export default App;
