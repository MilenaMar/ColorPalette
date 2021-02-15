import React from 'react';
import Pallete from './pallet'
import seedsColors from './SeedsColors';


function App() {
  return (
    <div className="App">
     <Pallete {...seedsColors[4]}/>
    </div>
  );
}

export default App;
