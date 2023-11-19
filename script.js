const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./lib/shapes');

async function generateLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal number):',
      },
    ]);

    await createSVG(userInput.text.slice(0, 3), userInput.textColor, userInput.shape, userInput.shapeColor);
  } catch (error) {
    console.error('Error:', error);
  }
}

generateLogo();