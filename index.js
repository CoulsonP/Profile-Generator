const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const fs = require("fs")
const inquirer = require("inquirer")
const generateHtml = require("./source/generatehtml")
const teamArray = []



    function createManager() {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'managerName',
            message: "What is the team Manager's name?",
          },
          {
            type: 'input',
            name: 'managerid',
            message: "What is the team Manager's id?",
          },
          {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team Manager's email?",
          },
          {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team Manager's office number?",
          },
        ])
        .then((answers) => {
          const manager = new Manager(
            answers.managerName,
            answers.managerid,
            answers.managerEmail,
            answers.managerOfficeNumber
          );
          teamArray.push(manager);
          addMember();
        });

        function createEngineer() {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'EngineerName',
                  message: "What is the Engineer's name?",
                },
                {
                  type: 'input',
                  name: 'Engineerid',
                  message: "What is the Engineer's id?",
                },
                {
                  type: 'input',
                  name: 'EngineerEmail',
                  message: "What is the Engineer's email?",
                },
                {
                  type: 'input',
                  name: 'github',
                  message: "What is the Engineers Github?",
                },
              ])
              .then((answers) => {
                const engineer = new Engineer(
                  answers.EngineerName,
                  answers.Engineerid,
                  answers.EngineerEmail,
                  answers.github
                );
                teamArray.push(engineer);
                addMember();
              });
            }

            function createIntern() {
                inquirer
                  .prompt([
                    {
                      type: 'input',
                      name: 'InternName',
                      message: "What is the team Intern's name?",
                    },
                    {
                      type: 'input',
                      name: 'Internid',
                      message: "What is the team Intern's id?",
                    },
                    {
                      type: 'input',
                      name: 'InternEmail',
                      message: "What is the team Intern's email?",
                    },
                    {
                      type: 'input',
                      name: 'school',
                      message: "What is the Intern's school?",
                    },
                  ])
                  .then((answers) => {
                    const intern = new Intern(
                      answers.InternName,
                      answers.Internid,
                      answers.InternEmail,
                      answers.school
                    );
                    teamArray.push(intern);
                    console.log(teamArray)
                    addMember();
                  });
                }

    function addMember() {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'member',
            message: 'Would you like to add a team member?',
            choices: [
              'Engineer',
              'Intern',
              "None",
            ],
          },
        ])
        .then((response) => {
          switch (response.member) {
            case 'Engineer':
              createEngineer();
              break;
            case 'Intern':
              createIntern();
              break;
            default:
              console.log("Team Html Created")
              fs.writeFileSync("./dist/index.html", generateHtml(teamArray))
          }
        });
    }}
    createManager()