const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
const mozilla =  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
const gnu = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";

const mitLink = "(https://opensource.org/licenses/MIT)"
const mozillaLink = "(https://opensource.org/licenses/MIT)"
const gnuLink = "(https://www.gnu.org/licenses/gpl-3.0)"
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "The MIT License") {
        return mit;
    } else if (license === "Mozilla Public License 2.0") {
        return mozilla;
    } else if (license ==="GNU GPL v3") {
        return gnu;
    }else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === "The MIT License") {
        return mitLink;
    } else if (license === "Mozilla Public License 2.0") {
        return mozilla;
    } else if (license ==="GNU GPL v3") {
        return gnu;
    }else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return renderLicenseBadge(license) + renderLicenseLink(license)
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license) 
  * [Contributing] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
  
  ## Installation
  ${data.Installation}

  ##Usage
  ${data.usage}

  ##License
  ${renderLicenseSection(data.license)}

  ##Contributing
  Can other developers contribute to your project,  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions
  Submit questions, ${data.questions}
  
  ##Username
  ${data.Username}

  ##Email
  ${data.email}
`;
}

module.exports = generateMarkdown;