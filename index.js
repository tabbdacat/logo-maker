const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Square, Circle} = require("./lib/shapes");

// questions array
const questions = [
    {
      type: 'input',
      message: 'What is the text you would like to be in your logo? (up to 3 chars)',
      name: 'text',
    },
    {
        type: 'list',
        message: 'What color do you want your text to be?',
        name: 'colorText',
        choices: ["red", "orange", "yellow", "green", "blue", "purple"]
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        name: 'shape',
        choices: ["circle", "triangle", "square"]
    },
    {
        type: 'list',
        message: 'What color do you want your logo to be?',
        name: 'colorLogo',
        choices: ["red", "orange", "yellow", "green", "blue", "purple"]
    },
]

// function to generate svg content
function generateSVG(shape, text, colorText, colorLogo) {
    let newShape;

    // assigns to shape class per user input
    if(shape === 'square') {
        newShape = new Square(colorLogo);
    }
    if(shape === 'circle') {
        newShape = new Circle(colorLogo);
    }
    if(shape === 'triangle') {
        newShape = new Triangle(colorLogo);
    }

    // svg content 
    return ` 
    <svg viewbox="0 0 300 200"> 
    
    ${newShape.render()} 

    <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${colorText}" font-size="40">${text}</text>
    `;
}

// initializes the app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
        generateSVG(data.shape, data.text, data.colorText, data.colorLogo);
        // writes svg file
            fs.writeFile('./logo.svg', generateSVG(data.shape, data.text, data.colorText, data.colorLogo), (err) => {
                err ? console.log(err) : console.log('Success! Check out your new logo.svg.') 
    });
        })
}

// Function call to initialize app
init();