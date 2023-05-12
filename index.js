// ======================================================== //
//                     MODULES/DEPENDENCIES
// ======================================================== //

const shape = require("./lib/shapes");
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
    message: `\n 1) Pick a text color or 3 digit hex code (for example, for 'red', type in 'red' or F00):`,
    maxLength: 3,
  },
  {
    type: "maxlength-input",
    name: "shape",
    message: `\n 2) Pick a shape (type in 'cir', 'tri', or 'sqr'):`,
    maxLength: 3,
  },
];
let userData;
// ======================================================== //
//                          CODE BELOW
// ======================================================== //
function init() {
  console.log(`\nHello! Welcome to the Shape Generator!\n
    Everything you type is restricted to 3 characters.
    Just follow the directions and we will get a shape in the end!\n`);

  inquirer.registerPrompt("maxlength-input", MaxLength);
  inquirer.prompt(shapeQuestions).then((answers) => next(answers));
}
init();

function next(answers) {
  userData = answers;
  console.log(`The user wants a ${userData.textColor} ${userData.shape}.`);
}
