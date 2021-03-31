import DrumPad from './DrumPad.jsx'

export default function DrumPanel ({soundMap, updateDisplay}){
    let keyOrder = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    return(
    <div id="drums">
        {keyOrder.map((key) => {return (
            <DrumPad key={key} keyID= {key} keyCode={soundMap[key]} name={soundMap[key].name} src={soundMap[key].src} 
                updateDisplay={updateDisplay}/>
            )})}
    </div>);
}