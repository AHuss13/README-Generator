// Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// Create an array of questions for user input
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
    type: 'list',
    name: 'license',
    message: 'What License does your project use?',
    choices: ['MIT', 'GNU_GPLv3', 'None'],
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
    message: 'I beseech thee to provide thy Github name of usage here:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated')
  );
};

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const write = generateMarkdown(answers);
    writeToFile('README.md', write);
  });
};

// Function call to initialize app
init();