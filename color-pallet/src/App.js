import React, {Component} from "react";
import Palette from "./palette";
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
      <Route exact path="/" render={()=> <h1>Pallet list goes here</h1>} />
      <Route exact path="/palette/:id" 
      render={ routerProps=> (<Palette 
      palette={generatePalette(this.findPalette(routerProps.match.params.id))} />)} />
    </Switch>

    //<div className="App">
    //<Palette />
    //</div>
  );
 }
}

export default App;
