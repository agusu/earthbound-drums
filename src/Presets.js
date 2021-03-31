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
    "W": {name: "Wow!", src: w, keycode: 87},
    "E": {name: "PSI", src: e, keycode: 69},
    "A": {name: "Cursor Horizontal", src: a, keycode: 65},
    "S": {name: "Cursor Vertical", src: s, keycode: 83},
    "D": {name: "Text", src: d, keycode: 68},
    "Z": {name: "Present Open", src: z, keycode: 90},
    "X": {name: "Window", src: x, keycode: 88},
    "C": {name: "OK desu ka?", src: c, keycode: 67}
 }

export default soundPreset
export const keyPreset =  ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];