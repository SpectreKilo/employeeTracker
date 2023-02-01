const db = require("./main/config/connection");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const{ menuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions } = require("./main/utils/query");
const { showDepartments, showEmployees, showRoles, addDepartment, addRole, addEmployee, updateEmployee } = require("./main/utils/query");

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("\n\nWELCOME TO EMPLOYEE TRACKER\n\n")
    askQuestions();
});

