const SVG = require('./svg');
const Text = require('./text');
const {Circle, Triangle, Square} = require('./shapes');

const newText = new Text("HI", "brown");
// if statement for type of shape
const newShape = new Shapes("yellow");
const newSVG = new SVG(newText, newShape);

console.log(newSVG.render());