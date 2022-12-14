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
    message: 'License:',
    name: 'License',
  },
  // {
  //   type: 'input',
  //   message: 'Installation:',
  //   name: 'Installation',
  // },
  // {
  //   type: 'input',
  //   message: 'Instructions:',
  //   name: 'Instructions',
  // },
  // {
  //   type: 'input',
  //   message: 'Usage:',
  //   name: 'Usage',
  // },
  // {
  //   type: 'input',
  //   message: 'Contributing:',
  //   name: 'Contributing',
  // },
  // {
  //   type: 'input',
  //   message: 'Tests:',
  //   name: 'Tests',
  // },
  // {
  //   type: 'input',
  //   message: 'Questions:',
  //   name: 'Questions',
  // }
]

let data = {
  title: "",
  tableOfContents: [],
  license: "",
  description: "",

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
    console.log(data)
    writeToFile("README", generateMarkdown(data))
  });
}

function generateTableOfContents(questions) {
  questions.forEach(element => {
    if (element.name != "Title") {
      data.tableOfContents.push(element.name)
    }
  });  
}

// Function call to initialize app
init();
