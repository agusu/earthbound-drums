import React, { useEffect, useCallback } from 'react';

export default function DrumPad ({keyID, keyCode, name, src, updateDisplay}) {
    
    const playAndUpdate = useCallback(() => { 
        const sound = document.getElementById(keyID);
        sound.currentTime = 0;
        sound.play();
        updateDisplay(name);
    }, [keyID, name, updateDisplay])

    useEffect(() => {

        function handleKeyPress(e) {
            if (e.key === keyCode) {
                playAndUpdate()
            } else if (e.keyIdentifier === keyCode) {
                playAndUpdate()
            } else if (e.keyCode === keyCode) {
                playAndUpdate()
            }
        }
        window.addEventListener('keydown', handleKeyPress);
      }, [keyID, keyCode, name, src, updateDisplay, playAndUpdate]);

    return(<div className="drum-pad" onClick={playAndUpdate} id={name}>
            <span>{keyID}</span>
            <audio className="clip" id={keyID} src={src}/>
            </div>)
}