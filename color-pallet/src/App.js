import React from 'react';
import Pallete from './pallet'
import seedsColors from './SeedsColors';
import {generatePalette} from './colorHelpers'


function App() {
  console.log(generatePalette(seedsColors[4]))
  return (
    <div className="App">
     <Pallete {...seedsColors[3]}/>
    </div>
  );
}

export default App;
