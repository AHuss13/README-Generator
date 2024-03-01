// TODO: Include packages needed for this application

const fs = require('fs)');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the Title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the Description for your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do your install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What License does your project use?',
    choices: [MIT, GNU, None],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute?',
  },
  {
    type: 'input',
    name: 'tests',
    message: '*Read as a pirate* Do there be tests on board? If so, how they be ran?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'I beseech thee to provide thine Github name of usage here:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections
//      entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions



// WHEN I enter my project title
// THEN this is displayed as the title of the README



// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the
//      README entitled License that explains which license the application is covered under



// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile



// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions



// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README