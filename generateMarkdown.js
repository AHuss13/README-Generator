// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU_GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  };
  return licenseBadge[license]
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GNU_GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
  };
  return licenseLink[license]
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
    'MIT': 'This project is covered under the MIT License',
    'GNU_GPLv3': 'This project is covered under the GNU GPL v3 License'
  };
  return licenseSection[license]
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contributing)
- [Tests](#tests)
- [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Contact
Github: ${data.github}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
