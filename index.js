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

const askQuestions = () => {
    inquirer.createPromptModule(menuQuestions)
        .then((answers) => {
            switch (answers.firstMenu) {

                case "View All Employees":
                    viewEmployees()
                    break;

                case "Add Employee":
                    addNewEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;
    
                case "Add Role":
                    addNewRole();
                    break;
    
                case "View All Departments":
                    viewDepartments();
                    break;
    
                case "Add Department":
                    addNewDepartment();
                    break;
    
                case "Quit":
                    console.log("Thank you for using Employee-Tracker")
                    break;
            }
            if (answers.firstMenu === "Quit") {
                return;
            }
        });
};