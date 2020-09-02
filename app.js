const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var teamMembers = [];
function buildPage()
{
    fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
}

function createTeam()
{
    inquirer.prompt([{
            type: "list",
            name: "memberChoice",
            message: "To generate your team please select a member you would like to add. ",
            choices: ["Manager", "Engineer", "Intern", "I dont want to add any more team members"]
        }]);
    function createTeam()
    {
        inquirer.prompt([{
                type: "list",
                name: "memberChoice",
                message: "To generate your team please select a member you would like to add. ",
                choices: ["Manager", "Engineer", "Intern", "I dont want to add any more team members"]
            }]).then(userChoice => {
            switch (userChoice.memeberChoice)
            {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Manager":
                    addManager();
                    break;
                default: buildPage();
            }
        });
    }
    

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated div for each employee!

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
