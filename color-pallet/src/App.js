import React from 'react';
import Pallete from './pallet'
import seedsColors from './SeedsColors';
import {generatePalette} from './colorHelpers'


function App() {
  return (
    <div className="App">
     <Pallete pallete={generatePalette(seedsColors[4])}/>
    </div>
  );
}

export default App;
