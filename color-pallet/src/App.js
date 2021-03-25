import React from "react";
import Palette from "./palette";
import { Route, Switch } from "react-router-dom";
import seedsColors from "./SeedsColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={()=> <h1>Pallet list goes here</h1>} />
      <Route exact path="/palette/:id" render={()=> <h1>individual pallete</h1>} />
    </Switch>

    //<div className="App">
    //<Palette pallete={generatePalette(seedsColors[4])}/>
    //</div>
  );
}

export default App;
