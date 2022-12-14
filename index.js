// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [

  {
    type: 'input',
    message: 'Title:',
    name: 'Title',
  },
  {
    type: 'input',
    message: 'Description:',
    name: 'Description',
  },
  {
    type: 'input',
    message: 'Installation:',
    name: 'Installation',
  },
  {
    type: 'input',
    message: 'Instructions:',
    name: 'Instructions',
  },
  {
    type: 'input',
    message: 'Usage:',
    name: 'Usage',
  },
  {
    type: 'input',
    message: 'Contributing:',
    name: 'Contributing',
  },
  {
    type: 'input',
    message: 'Tests:',
    name: 'Tests',
  },
  {
    type: 'list',
    message: 'License:',
    choices: ['Apache', 'MIT','GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3'],
    name: 'License',
  },
  {
    type: 'input',
    message: 'Email:',
    name: 'Email',
  },
  {
    type: 'input',
    message: 'GitHub:',
    name: 'GitHub',
  }
]

let data = {
  title: "",
  tableOfContents: [],
  license: "",
  description: "",
  installation: "",
  instructions: "",
  usage: "",
  contributing: "",
  tests: "",
  email: "",
  github: ""
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data,
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
function init() {
  generateTableOfContents(questions)

  inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response)
    data.title = response.Title
    data.description = response.Description
    data.license = response.License
    data.installation = response.Installation
    data.instructions = response.Instructions
    data.usage = response.Usage
    data.contributing = response.Contributing
    data.tests = response.Tests
    data.email = response.Email
    data.github = response.GitHub
    console.log(data)
    writeToFile("README", generateMarkdown(data))
  });
}

function generateTableOfContents(questions) {
  questions.forEach(element => {
    if (element.name != "Title" || element.name != "Email" || element.name != "GitHub") {
      data.tableOfContents.push(element.name)
    }
  });
  data.tableOfContents.push("Questions")
}

// Function call to initialize app
init();
