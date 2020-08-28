const Employee = require("lib/Employee.js")
const Manager = require("lib/Manager.js");
const Engineer = require("lib/Engineer.js");
const Intern = require("lib/Intern.js");

const axios = require("axios");
const inquirer = require("inquirer");
const Jest = require("jest");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("lib/htmlRenderer.js");

const startQuestion = [
    {
        type: "list",
        message: "click option to begin",
        name: "StartQuestion",
        choices: [
            "add and employee to the team",
            "Create Squad Html page (Add team member  first)" 
        ]
    }
];

const adminQuestions = [ 
{
    type: "input",
    message: "What is your name",
    name: "name",
  
},
{
    type: "input",
    message: "What is your Id number?",
    name: "id",
  
},
{
    type: "input",
    message: "What is your email?",
    name: "email",
  
},
{
    type: "confirm",
    message: "Are you a manager?",
    name: "position",
    choices: ["yes", "No"]
  
}

];

const questions = [ 
{
    type: "input",
    message: "What is your employee name",
    name: "name",
  
},
{
    type: "input",
    message: "What is your employee Id number?",
    name: "id",
  
},
{
    type: "input",
    message: "What is your employee's email?",
    name: "email",
  
},
{
    type: "list",
    message: "What is employees title?",
    name: "title",
    choices: ["engineer", "intern"]
  
}
];

const ManagerQuestions = [ 
{
    type: "input",
    message: "What is your employee name",
    name: "name",
  
},
{
    type: "input",
    message: "What is your employee Id number?",
    name: "id",
  
},
{
    type: "input",
    message: "What is your employee's email?",
    name: "email",
  
},
{
    type: "list",
    message: "What is employees title?",
    name: "title",
    choices: ["engineer", "intern"]
  
}
];

const ManagerQuestion = [
    { type: "input",
    message: "What is your office number?",
    name: "officeNumber",
    
  }
]
const EngineerQuestion = [
    { type: "input",
    message: "What is the engineer's GitHub username",
    name: "gitName",
    
  }
]
const internQuestion = [
    { type: "input",
    message: "What school does your intern attend?",
    name: "school",
    
  }
];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
