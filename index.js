const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

// questions array
const questions = [
    {
        type: 'input',
        message: 'What is the text you would like to be in your logo? (up to 3 chars)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want your text to be? Enter a color keyword or hexadecimal number.',
        name: 'colorText',
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        name: 'shape',
        choices: ["circle", "triangle", "square"]
    },
    {
        type: 'input',
        message: 'What color do you want your logo to be? Enter a color keyword or hexadecimal number.',
        name: 'colorLogo',
    },
]

// function to generate svg content
function generateSVG(shape, text, colorText, colorLogo) {
    let newShape;

    // assigns to shape class per user input
    if (shape === 'square') {
        newShape = new Square(colorLogo);
    }
    if (shape === 'circle') {
        newShape = new Circle(colorLogo);
    }
    if (shape === 'triangle') {
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

            // Checks to see that the password is 3 chars or less
            if (data.text.length > 3) {
                return console.log('Error: Please enter 3 or less characters');
            }

            generateSVG(data.shape, data.text, data.colorText, data.colorLogo);
            // writes svg file
            fs.writeFile('./examples/logo.svg', generateSVG(data.shape, data.text, data.colorText, data.colorLogo), (err) => {
                err ? console.log(err) : console.log('Success! Check out your new logo.svg.')
            });
        })
}

// Function call to initialize app
init();