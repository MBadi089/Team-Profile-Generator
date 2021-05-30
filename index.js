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
            if (employeeRole == 'Engineer') {
        {
        //ask the user for the employee's id
            type: 'userInput',
            name: 'id',
            message: 'Enter Engineers ID',
        
        },

        {
        //ask the user for the employee's email address
            type: 'userInput',
            name: 'email',
            message: 'Enter Engineers email address.',
        },
        //ask the user for the employee's github name
        {
            type: 'userInput',
            name: 'github',
            message: 'Enter Engineers github user name.'
        }
    
    }
    else if (employeeRole == 'Manager') {
        {
            //ask the user for the employee's id
                type: 'userInput',
                name: 'id',
                message: 'Enter managers ID',
            
        },
    
        {
            //ask the user for the employee's email address
                type: 'userInput',
                name: 'email',
                message: 'Enter managers email address.',   
        },

        //ask the user for the manager's office number
        {
            type: 'userInput',
            name: 'office',
            message: 'Enter managers office number.',
        },
    }
    else (employeeRole == 'Intern') {
        {
            //ask the user for the employee's id
                type: 'userInput',
                name: 'id',
                message: 'Enter Interns ID',
            
        },
    
        {
            //ask the user for the employee's email address
                type: 'userInput',
                name: 'email',
                message: 'Enter Interns email address.',   
        },
        
        {
            //ask the user for the intern's school 
            type: 'userInput',
            name: 'education',
            message: 'Enter Interns attending school.',
        }
    }

    
];

//TODO: Create a function to initialize app
function init() {
    inquirer.prompt(quesitons)
    .then(function(userInput) {
        console.log(userInput)
    });
};

init();