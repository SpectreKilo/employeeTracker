const inquirer = require("inquirer");

const menuQuestions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "firstMenu",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
    }
];

const addEmployeeQuestions = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name"
    }
];

const addRoleQuestions = [
    {
        type: "input",
        message: "What is the title of the new role?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the salary of the new role?",
        name: "salary"
    },
];
const addDepartmentQuestions = [
    {
        type: "input",
        message: "What is the name of the new department?",
        name: "name"
    }
];

module.exports = { menuQuestions, addEmployeeQuestions, addRoleQuestions, addDepartmentQuestions, addEmployeeQuestions };