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
    name: "textColor",
    message: `\n 1) First, pick a text color or 3 digit hex code (for example, for 'red', type in 'red' or F00):`,
    maxLength: 3,
  },
  {
    type: "list",
    name: "shape",
    message: `\n 2) Next, choose a shape from the list below:`,
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "maxlength-input",
    name: "shapeColor",
    message: `\n 3) Lastly, pick a shape color or 3 digit hex code (for example, for 'red', type in 'red' or F00):`,
    maxLength: 3,
  },
];

let userData, shapeColor, textColor;
// ======================================================== //
//                          CODE BELOW
// ======================================================== //

/**
 * begins inquirer prompt
 */
function init() {
  console.log(`\nHello! Welcome to the Shape Generator!\n
    Everything you type is restricted to 3 characters.
    Just follow the directions and we will get a shape in the end!\n`);

  inquirer.registerPrompt("maxlength-input", MaxLength);
  inquirer.prompt(shapeQuestions).then((answers) => next(answers));
}
init();

/**
 * matches parameters with answers
 * @param {*} answers responses from inquirer
 */
function next(answers) {
  decideColor(answers);

  switch (answers.shape) {
    case "circle":
      const newCircle = new Shape[1]();
      fs.writeFile(
        "sample-file.svg",
        newCircle.render(300, 200, shapeColor, textColor),
        (err) => {
          err ? console.err(err) : console.log("success!");
        }
      );
      break;
    case "triangle":
      const newTriangle = new Shape[2]();
      // newTriangle.customerResponse();
      fs.writeFile(
        "sample-file.svg",
        newTriangle.render(300, 200, shapeColor, textColor),
        (err) => {
          err ? console.err(err) : console.log("success!");
        }
      );
      break;
    default:
      const newSquare = new Shape[3]();
      fs.writeFile(
        "sample-file.svg",
        newSquare.render(300, 200, shapeColor, textColor),
        (err) => {
          err ? console.err(err) : console.log("success!");
        }
      );
  }

  console.log(`\nGenerated logo.svg!`);
}

function decideColor(answers) {
  if (answers.textColor === "bla" || answers.textColor === "000") {
    textColor = "black";
    shapeColor = "cyan";
  } else {
  }
  return textColor && shapeColor;
}
