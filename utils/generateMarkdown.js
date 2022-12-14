
let licenses = [
  {
    name: 'Apache',
    badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`,
    link: "https://opensource.org/licenses/Apache-2.0"
  },
  {
    name: 'MIT',
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link: "https://opensource.org/licenses/MIT"
  },
  {
    name: 'GNU GPL v3',
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },
  {
    name: 'GNU GPL v2',
    badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },
  {
    name: 'GNU AGPL v3',
    badge: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]",
    link: "https://www.gnu.org/licenses/agpl-3.0"
  }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseBadge = ""
  let licenseLink = ""
  licenses.forEach(element => {
    if (element.name == data.license) {
      licenseBadge = element.badge
      licenseLink = element.link
    }
  });

  if (licenseBadge == "" || licenseLink == "") {
    return ``
  }
  return `## Badge\n${licenseBadge}(${licenseLink})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseLink = ""
  licenses.forEach(element => {
    if (element.name == data.license) {
      licenseLink = element.link
    }
  });

  if (licenseLink == "") {
    return ``
  }
  license = `\nThis application is covered under [${data.license}](${licenseLink})`
  return `## License ${license}`
}

function renderTableOfContentsSection(data) {
  var toc = ``
  data.tableOfContents.forEach(element => {
    toc += `\n * [${element}](#${element})`
  });
  return `## Table of Contents ${toc}`
}

function renderDescription(data) {
  description = `\n ${data.description}`
  return `## Description ${description}`
}

function renderInstallation(data) {
  installation = `\n ${data.installation}`
  return `## Installation ${installation}`
}

function renderInstructions(data) {
  instructions = `\n ${data.instructions}`
  return `## Instructions ${instructions}`
}

function renderUsage(data) {
  usage = `\n ${data.usage}`
  return `## Usage ${usage}`
}

function renderContributing(data) {
  contributing = `\n ${data.contributing}`
  return `## Contributing ${contributing}`
}

function renderTests(data) {
  tests = `\n ${data.tests}`
  return `## Tests ${tests}`
}

function renderQuestions(data) {
  questions = `\n ${data.questions}`
  return `## Questions?\n### Reach me here:\n[${data.github}](https://github.com/${data.github})\n\n${data.email}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n${renderLicenseBadge(data)}\n\n${renderTableOfContentsSection(data)}\n\n${renderDescription(data)}\n\n${renderLicenseSection(data)}\n\n${renderInstallation(data)}\n\n${renderInstructions(data)}\n\n${renderUsage(data)}\n\n${renderContributing(data)}\n\n${renderTests(data)}\n\n${renderQuestions(data)}
  `;
}

module.exports = generateMarkdown;
