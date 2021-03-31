import React, { useEffect, useCallback } from 'react';

export default function DrumPad ({keyID, keyCode, name, src, updateDisplay}) {
    
    const playAndUpdate = useCallback(() => { 
        let MySound = new Audio(src);
        MySound.play();
        updateDisplay(name);
    }, [name, src, updateDisplay])

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

    return(<div className="drum-pad" onClick={playAndUpdate}>
            {keyID}
            <audio className="clip" id={keyID} src={src}/>
            </div>)
}