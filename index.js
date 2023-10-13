const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");


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
        name: 'color-text',
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
        name: 'color-logo',
        choices: ["red", "orange", "yellow", "green", "blue", "purple"]
    },
]
