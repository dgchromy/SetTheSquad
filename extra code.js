function startQuestion()
{
    inquirer.prompt([{ // add a .then function create function to hold all the function//
            type: "list",
            message: "click option to begin",
            name: "StartQuestion",
            choices: ["add and employee to the team", "Create Squad Html page (Add team member  first)"]
        }]);
}
function adminQuestions()
{
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name",
            name: "name"

        },
        {
            type: "input",
            message: "What is your Id number?",
            name: "id"

        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"

        },
        {
            type: "confirm",
            message: "Are you a manager?",
            name: "position",
            choices: ["yes", "No"]

        }
    ]);
}


function employeeQuestions()
{
    [
        {
            type: "input",
            message: "What is your employee name",
            name: "name"

        },
        {
            type: "input",
            message: "What is your employee Id number?",
            name: "id"

        },
        {
            type: "input",
            message: "What is your employee's email?",
            name: "email"

        },
        {
            type: "list",
            message: "What is employees title?",
            name: "title",
            choices: ["engineer", "intern"]

        }

    ];
}


function managerQuestions()
{
    [
        {
            type: "input",
            message: "What is your employee name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee Id number?",
            name: "id"

        },
        {
            type: "input",
            message: "What is your employee's email?",
            name: "email"

        },
        {
            type: "list",
            message: "What is employees title?",
            name: "title",
            choices: ["engineer", "intern"]

        }
    ];
};

// var teamMembers = [];
// function buildPage()
// {
//     fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
// }
// const ManagerQuestions = [
// {
//     type: "input",
//     message: "What is your employee name",
//     name: "name",

// },
// {
//     type: "input",
//     message: "What is your employee Id number?",
//     name: "id",

// },
// {
//     type: "input",
//     message: "What is your employee's email?",
//     name: "email",

// },
// {
//     type: "list",
//     message: "What is employees title?",
//     name: "title",
//     choices: ["engineer", "intern"]

// }
// ];

// const ManagerQuestion = [
//     { type: "input",
//     message: "What is your office number?",
//     name: "officeNumber",

// }
// ]
// const EngineerQuestion = [
//     { type: "input",
//     message: "What is the engineer's GitHub username",
//     name: "gitName",

// }
// ]
// const internQuestion = [
//     { type: "input",
//     message: "What school does your intern attend?",
//     name: "school",

// }
// ];