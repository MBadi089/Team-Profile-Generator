const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions;

const teamMembersArrary = [];

//=============================================================================//
//Ask the user to build their team starting with the manager.

const managerQuestions = [
    //ask for the manager's name
    {
        type: 'input',
        name: 'name',
        message: 'What is your Managers name?'
    },
    //ask for the manager's Id
    {
        type: 'input',
        name: 'id',
        message: 'What is your Managers ID?',
    },
    //ask for the manager's email address
    {
        type: 'input',
        name: 'email',
        message: 'What is the Managers email address?',
    },
    //ask for the managers office number
    {
        type: 'input',
        name: 'office',
        message: 'What is the Managers office number?',
    },
];
//=============================================================================//

//=============================================================================//
//Ask the user to add members to their team with roles

const teamMemberRole = {
    type: 'input',
    name: 'role',
    message: 'What is the role of your team member?',
    choices: ['Engineer', 'Intern'],
};
//=============================================================================//

//=============================================================================//
//Ask the user questions for the Engineering role

const engineerQuestions = [
    //ask for the engineer's name
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineers name?',
    },

    //ask for the engineer's ID
    {
        type: 'input',
        name: 'id',
        message: 'What is the Engineers ID?',
    },
    
    //ask for the engineers email address
    {
        type: 'input',
        name: 'email',
        message: 'What is the Engineers email address?',
    },

    //ask for the engineers github user name

    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers Github user name?',
    },
];
//=============================================================================//

//=============================================================================//
//Ask the user questions for the Intern role

const internQuestions = [
  //ask for the intern's name
    {
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?',
    },

    //ask for the intern's ID
    {
        type: 'input',
        name: 'id',
        message: 'What is the Interns ID?',
    },

    //ask for the intern's email address
    {
        type: 'input',
        name: 'email',
        message: 'What is the Interns email address?',
    },
    
    //ask where the intern is attending school
    {
        type: 'input',
        name: 'school',
        message: 'What school is the Intern attending?',
    },
];
//=============================================================================//

//=============================================================================//

