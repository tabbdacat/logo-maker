const SVG = require('./svg');
const Text = require('./text');
const {Circle, Triangle, Square} = require('./shapes');


let newShape = 'square';
let colorLogo = 'blue';


// function chooseShape(newShape) 
function generateSVG(shape, text, colorText, colorLogo) {
    if(shape === 'square') {
        let newShape = new Square(colorLogo);
        console.log(Shape);
    }
    if(shape === 'circle') {
        let newShape = new Circle(colorLogo);
    }
    if(shape === 'triangle') {
        let newShape = new Triangle(colorLogo);
    }

}
// chooseShape(newShape);


const newText = new Text("HI", "brown");
// if statement for type of shape
// const newShape = new Triangle("yellow");
// const newSVG = new SVG(newText, Shape);

// console.log(newSVG.render());