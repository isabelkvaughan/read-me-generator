const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter guidelines for how to contribute to your project:",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter test instructions for your project:",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project",
        choices: ["MIT", "Apache", "GPL"],
    },
    {
        type: "input",
        type: "",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
]).then((answers) => {
    let licenseBadgeURL = "";
    switch (answers.license) {
        case "MIT":
            licenseBadgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Apache":
            licenseBadgeURL = "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "GPL":
            licenseBadgeURL = "[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        default:
            break;
    }

    const readMeTemplate = 
`# ${answers.title}
${licenseBadgeURL}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${answers.installation}
        
## Usage
${answers.usage}
    
## License
This project is ${answers.license} licensed.
    
## Contributing
${answers.contribution}
    
## Tests
${answers.tests}
    
## Questions

If you have any questions, please contact:\n
GitHub profile: [github.com/${answers.username}](${answers.username})\n
Email: [${answers.answersemail}](mailto:${answers.email})
`;
        fs.writeFile('README.md', readMeTemplate, (error) => {
            error ? console.log(error) : console.log("README file generated.");
        });
    });