const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions;

inquirer
//Ask the user to answer the questions for the employees name, role, etc.
const questions = [
    {
   //ask the user for the employees name 
        type: 'userInput',
        name: 'name',
        message: 'Enter employees name',
        validate: name => {
            if (name) {
                return true;
            }
            else {
                console.log('Please enter the employees name!');
                return false;
            }
        }
    },

    {
   //ask the user for the employee's job title (maybe use a mutiple choice and create an if else method to branch off for certain choices)     
        type: 'list',
        name: 'employeeRole',
        message: 'Select employees role',
        choices: ['Engineer', 'Intern' ,'Manager'],
        validate: employeeRole => {
            if (employeeRole) {
                return true;
            }
            else {
                console.log('Please enter employees role!');
                return false;
            }
        }
    },

    {
    //ask the user for the employee's id
        type: 'userInput',
        name: 'id',
        message: 'Enter employees ID',
        
    },

    {
    //ask the user for the employee's email address
        type: 'userInput',
        name: 'email',
        message: 'Enter employees email address',
    },
];

//TODO: Create a function to initialize app
function init() {
    inquirer.prompt(quesitons)
    .then(function(userInput) {
        console.log(userInput)
    });
};

init();