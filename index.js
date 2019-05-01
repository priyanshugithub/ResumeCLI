#!/usr/bin/env node

const chalk = require("chalk");
const inquirer = require("inquirer");
const CFonts = require('cfonts');

const AboutMe = require("./commands/aboutme");
const Summary = require("./commands/summary");
const Skills = require("./commands/skills");
const Contact = require("./commands/contact");

const Index = () => {
    const prettyfonts = CFonts.render('Welcome', {
      font: 'block',              // define the font face
      align: 'left',              // define text alignment
      colors: ['red'],         // define all colors
      background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1,           // define letter spacing
      lineHeight: 1,              // define the line height
      space: true,                // define if the output text should have empty lines on top and on the bottom
      maxLength: '0',             // define how many character can be on one line
    });
    console.log(prettyfonts.string);
    console.log(chalk.blue("======================="));
    inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Pick your option",
        choices: ["AboutMe", "Summary", "Skills", "ContactMe"]
      }
    ])
    .then((answer) => {
      if (answer.option == "AboutMe") {
        AboutMe();
      }
      if (answer.option == "Summary") {
        Summary();
      }
      if (answer.option == "Skills") {
          Skills();
      }
      if (answer.option == "ContactMe") {
          Contact();
      }
    });
};

Index();