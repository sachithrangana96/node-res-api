const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employee.controller');

// get all employeees
router.get('/',EmployeeController.getAllEmployeeList);

// get employee by ID
router.get('/:id',EmployeeController.getEmployeeByID);

// create new employee
router.post('/',EmployeeController.createNewEmployee);

// update employee
router.put('/:id',EmployeeController.updateEmployee);

// delete emplyoee
router.delete('/:id',EmployeeController.deletEmployee);

module.exports = router;