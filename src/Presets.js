import q from './sounds/attack1.wav'
import w from "./sounds/wow.wav"
import e from "./sounds/psi.wav"
import a from "./sounds/curshoriz.wav"
import s from "./sounds/cursverti.wav"
import d from  "./sounds/text.wav"
import z from "./sounds/present.wav"
import x from "./sounds/window.wav"
import c from "./sounds/okdesuka.wav"


const soundPreset = {
    "Q": {name: "Attack 1", src: q, keyCode: 81},
    "W": {name: "Wow!", src: w, keyCode: 87},
    "E": {name: "PSI", src: e, keyCode: 69},
    "A": {name: "Cursor Horizontal", src: a, keyCode: 65},
    "S": {name: "Cursor Vertical", src: s, keyCode: 83},
    "D": {name: "Text", src: d, keyCode: 68},
    "Z": {name: "Present Open", src: z, keyCode: 90},
    "X": {name: "Window", src: x, keyCode: 88},
    "C": {name: "OK desu ka?", src: c, keyCode: 67}
 }

export default soundPreset
export const keyPreset =  ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];