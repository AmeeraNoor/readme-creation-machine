// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  license = `\n ${data.license}`
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n${renderTableOfContentsSection(data)}\n\n${renderDescription(data)}\n\n${renderLicenseSection(data)}
  `;
}

module.exports = generateMarkdown;
