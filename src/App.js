import './App.scss';
import React, { useState } from 'react';
import Display from './Display.jsx'
import DrumPad from './DrumPad.jsx'
import soundPreset, {keyPreset} from './Presets.js'

function App() {
  const [currentSound, setSound] = useState("");
  return (
    <div className="drum-machine">
      <Display text={currentSound}/>
      <div id="drums">
        {keyPreset.map((key) => {return (
            <DrumPad key={key} keyID={key} keyCode={soundPreset[key].keyCode} 
              name={soundPreset[key].name} src={soundPreset[key].src} updateDisplay={setSound}/>
            )})}
      </div>
    </div>
  );
}

export default App;
