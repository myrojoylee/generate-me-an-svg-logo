// ======================================================== //
//                     MODULES/DEPENDENCIES
// ======================================================== //

const Shape = require("./lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");
const MaxLength = require("inquirer-maxlength-input-prompt");

// ======================================================== //
//                     VARIABLES/ARRAYS
// ======================================================== //
const shapeQuestions = [
  {
    type: "confirm",
    name: "confirmToStart",
    message: `Are you ready to begin? `,
    maxLength: 3,
    default: false,
    transformer: (answer) => (answer ? "👍" : "👎"),
  },
  {
    type: "maxlength-input",
    name: "svgText",
    message: `\n 1) First, pick your logo text (limited to 3 characters):`,
    maxLength: 3,
  },
  {
    type: "input",
    name: "textColor",
    message: `\n 2) Next, pick a text color or 6 digit hex code (type in 'red' or '#FF0000'):`,
    maxLength: 3,
  },
  {
    type: "list",
    name: "shape",
    message: `\n 3) Then, choose a shape from the list below:`,
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: `\n 4) Lastly, pick a shape color or 6 digit hex code (type in 'red' or '#FF0000'):`,
    maxLength: 3,
  },
];

// ======================================================== //
//                          CODE BELOW
// ======================================================== //

/**
 * begins inquirer prompt
 */
function init() {
  console.log(`\nHello! Welcome to the Shape Generator!\n

    Just follow the directions to get your logo!\n`);

  inquirer.registerPrompt("maxlength-input", MaxLength);
  inquirer.prompt(shapeQuestions).then((answers) => next(answers));
}
init();

/**
 * matches parameters with answers
 * @param {*} answers responses from inquirer
 */
function next(answers) {
  let svgText = answers.svgText;
  let shapeColor = answers.shapeColor;
  let textColor = answers.textColor;
  switch (answers.shape) {
    case "circle":
      const newCircle = new Shape[1]();
      fs.writeFile(
        "logo.svg",
        newCircle.render(300, 200, svgText, shapeColor, textColor),
        (err) => {
          err ? console.err(err) : console.log(`\nGenerated logo.svg!\n`);
        }
      );
      break;
    case "triangle":
      const newTriangle = new Shape[2]();

      fs.writeFile(
        "logo.svg",
        newTriangle.render(300, 200, svgText, shapeColor, textColor),
        (err) => {
          err ? console.err(err) : console.log(`\nGenerated logo.svg!\n`);
        }
      );
      break;
    default:
      const newSquare = new Shape[3]();
      fs.writeFile(
        "logo.svg",
        newSquare.render(300, 200, svgText, shapeColor, textColor),
        (err) => {
          err ? console.err(err) : console.log(`\nGenerated logo.svg!\n`);
        }
      );
  }
}
