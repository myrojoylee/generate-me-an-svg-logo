# Generate Me an SVG logo!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

- The purpose of this assignment was to implement the concept of polymorphism by using parent and child class constructors, to begin understanding Test-driven develpment (TDD) with unit testing using Jest, and to practice more with the Inquirer package.

## Installation

- This is a [Node.js](https://nodejs.org/en) application. It is recommended to use at least v16 (up to v18) for this app to run correctly.
- [Inquirer v8.2.4](https://www.npmjs.com/package/inquirer) is needed and can be installed via npm. Once in your project folder, type the following in your terminal: `npm i inquirer@8.2.4`.
- [Jest](https://www.npmjs.com/package/jest) is needed to run unit tests and can be installed via npm. Once in your project folder, type the following in your terminal: `npm i jest`.
- [Inquirer-maxlength-input-prompt](https://www.npmjs.com/package/inquirer-maxlength-input-prompt) was used to restrict one of the user inputs to 3 characters. Once in your terminal, type the following in your terminal: `npm i inquirer-maxlength-input-prompt`.

## Usage

- Generating an SVG

  - Type `node index.js` in the Terminal and go through the prompts to generate your SVG which will be located in the `/examples` folder.
  - When prompted for colors, samples were taken from a [Browser-Supported Color List](https://www.w3schools.com/cssref/css_colors.php). Please either enter a color name from here all in lowercase or a 6-digit hex value beginning with the "#" sign. For example, `aliceblue` or its counterpart, `#F0F8FF` are acceptable for the same color. Similar instructions are included as part of the prompt.

- Sample SVG shown below:

  - Details: Text color is `maroon`, or `#800000`, with the shape color being `orchid`, or `#DA70D6`:


    <img src="https://github.com/myrojoylee/generate-me-an-svg-logo/blob/main/examples/square.svg" width = 500px />

## Testing

- Unit Tests using Jest

  - Type `npm run test` in the terminal to run all 4 unit tests that are provided. You can find the code for these in the `/lib` folder.

## Demo

- A walkthrough video can be found [here](https://drive.google.com/file/d/16gWtFU23_cPqxD6MRY4pNmJamlYXXf42/view?usp=sharing). It can also be found below:

https://github.com/myrojoylee/generate-me-an-svg-logo/assets/120980593/55ddf2a3-9350-4813-ab2c-e49ca8652615

## Sources:

Code for basic shapes was found in MDN web docs [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes).

## License

- Refer to the license in the repository.
