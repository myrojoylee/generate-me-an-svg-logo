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
    message: `\n 1) Pick a text color or 3 digit hex code (for example, for 'red', type in 'red' or F00):`,
    maxLength: 3,
  },
  {
    type: "maxlength-input",
    name: "shape",
    message: `\n 2) Pick a shape (type in 'tri', 'rec', or 'cir'):`,
    maxLength: 3,
  },
];
const sampleShape = `
    <svg
    width="541"
    height="271"
    >

        <rect
            width="541"
            height="271"
            x="0"
            y="0"
            fill="#3d5ea1"
        />

        <polygon
            fill="white"
            points="100,50 400,100 320,200 80,230"
        />

    </svg>
    `;
let userData;
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
  userData = answers;
  switch (userData.shape) {
    case "tri":
      const newTriangle = new Shape[1]();
      newTriangle.customerResponse();
      break;
    case "rec":
      const newRectangle = new Shape[2]();
      newRectangle.customerResponse();
      break;
    default:
      const newCircle = new Shape[3]();
      newCircle.customerResponse();
  }

  console.log(
    `\nCongrats! A new .svg file should have generated on the left-side panel!`
  );
}

// fs.writeFile("sample-file.svg", sampleShape, (err) => {
//   if (err) {
//     return console.err(err);
//   }
//   console.log("The file was saved!");
// });

// const newShape = new Shape[1]();
// console.log(newShape.render(4, 6));
